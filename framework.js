const user = document.getElementById("user_message");
const bot = document.getElementById("bot_message");
const answers = ["Hello I'm ChatBot!", "press 1 for time, 2 for a joke", "Sorry I didn't understand, right now 2 servies, press 1 to know the time,2 for  a joke", "Please press 1 for time ,2 for ajoke", "how you rate the chatbot 10 for i like and 0 for dislike", "lucas chatbot"];

const jokes = ["My friend thinks he is smart. He told me an onion is the only food that makes you cry",
"so I threw a coconut at his face.","What happens to a frog's car when it breaks down? It gets toad away.",
"Q: Is Google male or female? A: Female, because it doesn\'t let you finish a sentence before making a suggestion.",
"Q: Why was six scared of seven? A: Because seven ate nine.",
"Q: Why did the witches\' team lose the baseball game? A: Their bats flew away.", 
"Q: Can a kangaroo jump higher than the Empire State Building? A: Of course. The Empire State Building can't jump.",
"اتنين رخمين اوي اتحكم عليهم بالاعدام فسألو الاول نفسك في ايه قال نفسي اشوف امي، وبعدين سألو التاني نفسك في ايه قالهم نفسي متخلوهوش يشوف امه.",
"إتنين ماشين فى الصحرا طلع عليهم اسد فواحد منهم رماه بطوبة وجرى بيبص وراه لقى صاحبة واقف بيقولة إنت مبتجريش لية قالو وانا مالى هو انا إللى ضربته", 
"صعيدي عندو أرق مش قادر ينام صحبو قالو عد لغاية 500 بدأ يعد ولما نعس راح غسل وشه وجا يكمل للـــ 500.",
"واحد بلديتنا راح امريكا لقى كل الشباب لابسين تشيرت مكتوب علية سفن اب كوكاكولا  بيبسي .. راح كتب على الجلابية عصير قصب.",
"مرة دكتور تحليل امة ماتت قال تحاليلي ياما"];


const colors = ["lightblue", "lightgray", "gold", "lightgreen", "crismon", "#eecc11", "tomato",
"orange", "yellow", "white"];

let timeNow = Date();
const hello = answers[0];
const askSupport = answers[1];
const myDefault = answers[2];
const survey = answers[3];
const botName = answers[4];



var indexDefault = 0;
function chatbot() {

/* next update will be less cases by using [in and arrays with less cases ] */
switch (user.value) {
  case "hi":
    bot.textContent = hello;
    break;
  case "hello":
    bot.textContent = hello
    break;
  case "Hi":
    bot.textContent = hello;
    break;
  case "Hello":
    bot.textContent = helloay;
    break;
  case "hey":
    bot.textContent = helloy;
    break;
  case "Hey":
    bot.textContent = hello;
    break;
  case "HI":
    bot.textContent = helloy;
    break;
  case "HELLO":
    bot.textContent = hello;
    break;
  case "HEY":
    bot.textContent = helloy;
    break;
  case "hola":
    bot.textContent = hello;
    break;
  case "HOLA":
    bot.textContent = helloy;
    break;
  case "HOLA!":
    bot.textContent = hello;
    break;
  case "hola!":
    bot.textContent = helloy;
    break;
  case "hi!":
    bot.textContent = hello;
    break;
    
  case "Hello!":
    bot.textContent = helloy;
    break;
  case "HELLO!":
    bot.textContent = hello;
    break;
    
  case "HI!":
    bot.textContent = helloy;
    break;
  case "السلام عليكم":
    bot.textContent = hello;
    break;
  case "اهلا":
    bot.textContent = hello;
    break;
  case "مرحبا":
    bot.textContent = hello;
    break;
  case "السلام عليكم ورحمة الله وبراكته":
    bot.textContent = hello;
    break;
  case "مراحبا روبوت":
    bot.textContent = hello;
    break;    
  case "اهلا روبوت":
    bot.textContent = hello;
    break;    
  case "مراحبا اخي الكريم":
    bot.textContent = hello;
    break;    
  case "مراحبا صديقي":
    bot.textContent = hello;
    break;   
  case "hi robot":
    bot.textContent = hello;
    break;
  case "hi chatbot":
    bot.textContent = hello;
    break;
  case "hello robot":
    bot.textContent = hello;
    break;
  case "I'm ask for help":
    bot.textContent = askSupport;
    break;
  case "help me":
    bot.textContent = askSupport;
    break;    
  case "what are you doing":
    bot.textContent = askSupport;
    break;    
  case "I need support.":
    bot.textContent = askSupport;
    break;    
  case "I need support":
    bot.textContent = askSupport;
    break;
  case "help me.":
    bot.textContent = askSupport;
    break;
  case "Help me.":
    bot.textContent = askSupport;
    break;
  case "please help.":
    bot.textContent = askSupport;
    break;
  case "help me please.":
    bot.textContent = askSupport;
    break;
  case "how I get support":
    bot.textContent = askSupport;
    break;    
  case "help":
    bot.textContent = askSupport;
    break;    
  case "support":
    bot.textContent = askSupport;
    break;    
  case "teachnical support":
    bot.textContent = askSupport;
    break;
  case user.value.includes("how to"):
    bot.textContent = askSupport;
    break;
  case user.value.includes("How to"):
    bot.textContent = askSupport;
    break;
  case user.value.includes("i need help"):
    bot.textContent = askSupport;
    break;
  case user.value.includes("i need support"):
    bot.textContent = askSupport;
    break;
  case "thank you":
    bot.textContent = survey;
    break;    
  case "thanks for solve my problem":
    bot.textContent = survey;
    break;    
  case "Thank you":
    bot.textContent = survey;
    break;    
  case "ok bye bye":
    bot.textContent = survey;
    break;   
  case "I need leave":
    bot.textContent = survey;
    break;
  case "you solved my problem":
    bot.textContent = survey;
    break;
  case "bye":
    bot.textContent = survey;
    break;
  case "سلام":
    bot.textContent = survey;
    break;
  case "what is your name?":
    bot.textContent = botName;
    break;    
  case "Tell me your name":
    bot.textContent = botName;
    break;    
  case user.value.includes("what") + user.value.includes("your name"):
    bot.textContent = botName;
    break;
  case "2":
    /* you have to use it like this to generat random var will give static number or joke */
    bot.textContent = jokes[Math.floor(Math.random() * 11)];
    break;
  case "1":
    bot.textContent = timeNow;
    break;   
  case "?":
    bot.textContent = askSupport;
    break;    
  default:
    bot.textContent = myDefault;
    indexDefault += 1;
 }

    if (indexDefault > 2 && bot.textContent == myDefault) {
    bot.style.background = colors[Math.floor(Math.random() * 8)]; 
    bot.textContent = "I really don't know the answer enter 1 or 2 please";
  } else {
    bot.style.background = "white";
  }
  
  
}
