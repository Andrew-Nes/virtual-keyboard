import './style.scss';

const htmlBody = document.body;
const htmlHead = document.head;

// favicon
const favicon = document.createElement('link');
favicon.src = '../public/favicon.ico';
favicon.rel = 'shortcut icon';
favicon.type = 'image/x-icon';
htmlHead.append(favicon);
