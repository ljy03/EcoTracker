const messages = [
  {
    _id: 1,
    text: 'What do you want to learn more about?',
    createdAt: new Date(Date.UTC(2016, 5, 15, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
    quickReplies: {
      type: 'radio',
      values: [
				{
					title: 'About the website',
					value: 'This website aims to help encourage recycling other eco-friendly actions among communities.',
				},
				{
					title: 'Features',
					value: 'You can explore our home page to see your points, the quiz page to earn points, and the map page to see nearby locations',
				},
			],
    },
  },
];

export default messages;