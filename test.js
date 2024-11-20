import ProgressBar from 'progress';

// 创建一个进度条
const bar = new ProgressBar(':bar :percent', { 
    total: 100,
    width: 50 
});

// 更新进度条
let timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
