// WEBSITE/back-end/server.js

const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();
const cycleStreetsApiKey = process.env.CYCLESTREETS_API_KEY;

const app = express();
const port = 3000; // 你想让服务器跑在3000端口

// 你可以从环境变量读取KEY，也可以直接写死(测试环境下)：

// 告诉Express去托管 front-end 文件夹，让你可以 http://localhost:3000/analyse.html
app.use(express.static(__dirname + '/../front-end'));
// __dirname 指的是 back-end 文件夹的路径，所以再往上一级到front-end
// 如果路径不对，调一下就好了
// 也可以直接写: app.use(express.static('front-end'));

// 1) 定义一个后端路由: GET /api/collisions
app.get('/api/collisions', async (req, res) => {
  try {
    // A. 解析前端传来的查询参数 (bbox、boundary等)
    //    例如前端访问 /api/collisions?bbox=0.1252,52.1979,0.1302,52.1999&limit=3
    const { bbox, boundary, casualtiesinclude, limit } = req.query;

    // B. 构造CycleStreets的请求URL
    //    参考文档: https://api.cyclestreets.net/v2/collisions.locations
    let baseUrl = `https://api.cyclestreets.net/v2/collisions.locations?key=${cycleStreetsApiKey}&`;

    if (!bbox && !boundary) {
      return res.status(400).json({ error: 'Please provide bbox or boundary param' });
    }
    if (bbox) {
      baseUrl += `bbox=${bbox}&`;
    } else {
      baseUrl += `boundary=${boundary}&`;
    }

    if (casualtiesinclude) {
      baseUrl += `casualtiesinclude=${casualtiesinclude}&`;
    }
    if (limit) {
      baseUrl += `limit=${limit}&`;
    }

    // 你还可以添加更多可选参数，如 since、until、format 等

    console.log("Requesting CycleStreets collisions =>", baseUrl);

    // C. 后端通过 axios 请求 CycleStreets
    const response = await axios.get(baseUrl);

    // D. 拿到数据，直接返回给前端
    res.json(response.data);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch collisions' });
  }
});

// 2) 启动服务器监听
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
