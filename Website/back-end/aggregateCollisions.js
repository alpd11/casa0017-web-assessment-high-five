// aggregateCollisions.js

const axios = require('axios');
const fs = require('fs');
// 可选：用 dayjs 或 moment.js 来解析日期
const dayjs = require('dayjs');

// 1) 配置请求参数
const cycleStreetsApiKey = 'YOUR_KEY_HERE'; 
const bbox = '-0.489,51.261,0.236,51.655';
const since = '2016-01-01';
const until = '2017-12-31';
const limit = 2000;

// 2) 定义一个函数来获取 collisions
async function fetchCollisionsForLondon2016to2017() {
  let allCollisions = [];
  let page = 0;

  while (true) {
    // 拼出API地址
    let url = `https://api.cyclestreets.net/v2/collisions.locations?key=${cycleStreetsApiKey}`
            + `&bbox=${bbox}`
            + `&since=${since}`
            + `&until=${until}`
            + `&limit=${limit}`
            + `&page=${page}`
            + `&datetime=unixtime`; 
    // 我这里加了 &datetime=unixtime，方便后面解析日期

    console.log(`Requesting page=${page}:`, url);

    const response = await axios.get(url);
    const data = response.data;

    // 如果报错/格式异常，就跳出
    if (data.error) {
      console.error('API Error:', data.error);
      break;
    }

    if (!data.features || !Array.isArray(data.features)) {
      console.warn('No features found in data:', data);
      break;
    }

    const collisions = data.features;
    allCollisions = allCollisions.concat(collisions);
    console.log(`Got ${collisions.length} collisions in this page, total so far = ${allCollisions.length}`);

    // 如果这一页少于 limit，说明没有更多数据了
    if (collisions.length < limit) {
      console.log('No more pages needed');
      break;
    }
    
    // 否则翻页
    page++;
  }

  return allCollisions;
}

// 3) 把 collisions 按天统计
function aggregateCollisionsByDay(collisions) {
  // 准备一个 Map: { 'YYYY-MM-DD': count }
  const dailyMap = {};

  collisions.forEach(feature => {
    // feature.properties 里应该有 datetime(unixtime)
    const unixtime = feature.properties.datetime; 
    // 如果 datetime=unixtime，应该是一个数字或字符串形式的秒数/毫秒数
    // CycleStreets docs: "datetime" is in seconds from 1970 if we request unixtime
    const timestampSec = parseInt(unixtime, 10); 
    if (Number.isNaN(timestampSec)) {
      return; // 跳过不合法的
    }

    // 转成 dayjs
    const dateStr = dayjs.unix(timestampSec).format('YYYY-MM-DD');
    // 计数+1
    if (!dailyMap[dateStr]) {
      dailyMap[dateStr] = 0;
    }
    dailyMap[dateStr]++;
  });

  return dailyMap;
}

// 4) 导出 CSV
function writeDailyCountsToCSV(dailyMap, outFile) {
  // 准备一个数组，用来按日期排序
  let rows = Object.keys(dailyMap)
    .sort()  // YYYY-MM-DD 排序
    .map(date => {
      return `${date},${dailyMap[date]}`;
    });

  // 表头可选
  rows.unshift('date,collision_count');

  const csvContent = rows.join('\n');

  // 写入文件
  fs.writeFileSync(outFile, csvContent, 'utf8');
  console.log(`CSV saved to ${outFile}`);
}

// 5) 主流程
async function main() {
  const collisions = await fetchCollisionsForLondon2016to2017();
  console.log(`Total collisions from 2016-2017 in London: ${collisions.length}`);

  const dailyMap = aggregateCollisionsByDay(collisions);
  // console.log(dailyMap);

  // 输出CSV
  writeDailyCountsToCSV(dailyMap, 'london_collisions_2016_2017.csv');
}

main().catch(err => console.error(err));
