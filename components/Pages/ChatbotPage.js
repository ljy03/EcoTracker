import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Welcome to the chatbot page!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your name',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " Hi {previousValue}, how can I help you?",
        trigger: '4'
    }, {
        id: '4',
        options: [
            { value: 1, label: 'About the website' , trigger: '5'},
            { value: 2, label: 'Features', trigger: '6' },
            { value: 2, label: 'Quit', trigger: '7'},
 
        ],
    },
    {
        id: '5',
        message: "This website aims to help encourage recycling other eco-friendly actions among communities.",
        trigger: '4'
    },{
        id: '6',
        message: "You can explore our home page to see your points, the quiz page to earn points, and the map page to see nearby locations",
        trigger: '4'
    },{
        id: '7',
        message: "Bye!",
        end: true
    }
];

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
const config = {
    botAvatar: "https://cdn.pixabay.com/photo/2015/06/12/18/31/cute-807306_1280.png",
    floating: true,
};
 
function ChatbotPage() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Chatbot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}
 
export default ChatbotPage;