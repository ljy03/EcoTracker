const messages = [
  {
    _id: 1,
    text: 'What do you want to learn more about?',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
    quickReplies: {
      type: 'radio',
      keepIt: true,
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
  {
    _id: 3,
    text: 'About the website',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'User',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
  {
    _id: 5,
    text: 'This website aims to help encourage recycling other eco-friendly actions among communities.',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 21, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
  {
    _id: 6,
    text: 'Anything else you want to learn about?',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 21, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
    quickReplies: {
      type: 'radio',
      keepIt: true,
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
  {
    _id: 7,
    text: 'Features',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 21, 0)),
    user: {
      _id: 1,
      name: 'User',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
  {
    _id: 8,
    text: 'You can explore our home page to see your points, the quiz page to earn points, and the map page to see nearby locations.',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 22, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
  {
    _id: 9,
    text: 'Anything else you want to learn about?',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 22, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
    quickReplies: {
      type: 'radio',
      keepIt: true,
      values: [
				{
					title: 'About the website',
					value: 'This website aims to help encourage recycling other eco-friendly actions among communities.',
				},
				{
					title: 'Features',
					value: 'You can explore our home page to see your points, the quiz page to earn points, and the map page to see nearby locations',
        },
        {
					title: 'No',
					value: 'No',
				},
			],
    },
  },
  {
    _id: 10,
    text: 'No',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 22, 0)),
    user: {
      _id: 1,
      name: 'User',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
  {
    _id: 11,
    text: 'Thanks for learning more! Have a good day!',
    createdAt: new Date(Date.UTC(2016, 5, 13, 17, 23, 0)),
    user: {
      _id: 2,
      name: 'Chatbot',
      avatar: 'https://media.istockphoto.com/id/1414699113/photo/small-robot-assistant-work-with-graphic-display.webp?b=1&s=170667a&w=0&k=20&c=m8y0GFWEyDOsbqUGwOtMeiL5W2NVpDaCA522wsAm6B4=',
    },
  },
];

export default messages;