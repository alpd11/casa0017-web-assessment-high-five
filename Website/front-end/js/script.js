$(document).ready(function() {
    // the effect of Button hover
    $('.btn-custom').hover(
      function() {
        $(this).css({
          'background-color': '#a8c9c2', 
          'border-color': '#a8c9c2', 
          'color': '#000' // text color
        });
      },
      function() {
        // Mouse exit
        $(this).css({
          'background-color': '#bdd8bdb0',
          'border-color': '#bdd8bdb0', 
          'color': '#000' // text color
        });
      }
    );
  
    // Button click effect
    $('.btn-custom').click(function() {
      $(this).css({
        'background-color': '#90a8a2', 
        'border-color': '#90a8a2', 
        'color': '#000' // text color
      });
    });
  });
// front-end/js/script.js
// 这个函数会向后端 /api/collisions 发请求
async function fetchCollisions() {
  try {
    // 假设你想请求 bbox=0.1252,52.1979,0.1302,52.1999, limit=3
    // 你可以先写死参数测试
//    const limit = 3;
    const casualtiesinclude = 'cyclist';

    // 拼装请求URL
    const url = `/api/collisions?bbox=-0.489,51.261,0.236,51.655
               &since=2016-01-01
               &until=2017-12-31
               &limit=2000
               &page=0`;

    // 用 fetch 请求后端
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Server responded with ${res.status}`);
    }

    // 拿到 CycleStreets 返回的 JSON，可能是 GeoJSON FeatureCollection
    const data = await res.json();
    console.log('Collision data:', data);

    // 把数据插到页面
    const collisionsList = document.getElementById('collisionsList');
    if (!collisionsList) {
      console.warn('collisionsList element not found on the page');
      return;
    }

    // 清空旧内容
    collisionsList.innerHTML = '';

    if (data.error) {
      // 如果后端说error
      collisionsList.innerHTML = `<li>Error: ${data.error}</li>`;
      return;
    }

    // 大多数情况下 data 是 GeoJSON:
    // data.type = 'FeatureCollection'
    // data.features = [ {type: 'Feature', properties: { ... }, geometry: {...}}, ... ]
    if (data.features && Array.isArray(data.features)) {
      data.features.forEach(feature => {
        const props = feature.properties || {};
        // 例如 severity, datetime, casualties, ...
        // 也可能 props.severity = 'serious' etc.

        const li = document.createElement('li');
        li.textContent = `ID: ${props.id}, Severity: ${props.severity}, Date: ${props.datetime}`;
        collisionsList.appendChild(li);
      });
    } else {
      // 如果不是featureCollection，说明可能格式不同，或者出现了其他问题
      collisionsList.innerHTML = '<li>No collisions data found</li>';
    }

  } catch (err) {
    console.error(err);
    alert('Failed to fetch collisions: ' + err.message);
  }
}

// 在页面加载完成后自动调用
document.addEventListener('DOMContentLoaded', () => {
  fetchCollisions();
});
 