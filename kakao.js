Kakao.init('065e14567de4635f0d388d1a0718dbdb');
function sendLink() {
  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: '나와 어울리는 직업은?',
      description: 'pr.name',
      imageUrl: '',
      link: {
        mobileWebUrl: '',
        webUrl: ''
      }
    }
  });
}