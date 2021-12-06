const VkBot = require('node-vk-bot-api');
const Markup = require("node-vk-bot-api/lib/markup");
const Scene = require('node-vk-bot-api/lib/scene');
const Session = require('node-vk-bot-api/lib/session');
const Stage = require('node-vk-bot-api/lib/stage');
const ApiVkClient = require("api-vk-client");
const client = new ApiVkClient("31ea1c7a46d52c14a1f8cbfd67fb4d4a29e974f4c626ba0b7c276d3dfd1527fec66d260c07baa6753c3f9");
var vk = require('vk-sdk');
const fs = require('fs')
const database = require("./database.js")

vk.setToken('31ea1c7a46d52c14a1f8cbfd67fb4d4a29e974f4c626ba0b7c276d3dfd1527fec66d260c07baa6753c3f9');
const request = require('request')
const access_token = 'd54789ef72996b4101902188024e781982316414a4833bd44fd21924dcbd121392562f51c2e4e009e8c1e'
const bot = new VkBot("31ea1c7a46d52c14a1f8cbfd67fb4d4a29e974f4c626ba0b7c276d3dfd1527fec66d260c07baa6753c3f9");//eafe04e489aad145ee4098070d657960eb5644136712388de6ff696c97e09101abbf0c42c45c4c698bec5   
const scene = new Scene('TEST',
  (ctx) => {
    ctx.session.Koktevram = 0;
    ctx.session.Slizerin = 0;
    ctx.session.Grifendor = 0;
    ctx.session.Pufindor = 0;
    ctx.reply('День или ночь?', null, Markup
    .keyboard([
      [
        Markup.button('День', 'primary'),
        Markup.button('Ночь', 'primary'),
      ],
    ])
    .oneTime()
    
    );
    ctx.scene.next();
  },
  (ctx) => {
    if(ctx.message.text === "День"){
      ctx.session.Grifendor += 1;
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "Ночь"){
      ctx.session.Slizerin += 1;
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Лес или Озеро?"){

    }else{
      ctx.reply("ТЫ БЛИН!!! Я ЗНАЮ ЧТО ТЫ СЕДРИК!!! ПРОХОДИ ЗАНОВО !!! НЕТ ТАКОВО ВАРИАНТА ОТВЕТА!!")
      ctx.scene.leave();
    }


    setTimeout(function(){
      ctx.reply('Лес или Озеро?', null, Markup
    .keyboard([
      [
        Markup.button('Лес', 'primary'),
        Markup.button('Озеро', 'primary'),
      ],
    ])
    .oneTime()
    );
    },10000)
    
    ctx.scene.next();
  },
  (ctx) => {
    if(ctx.message.text === "Лес"){
      ctx.session.Slizerin += 1;
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Озеро"){
      ctx.session.Grifendor += 1;
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "Дождь или солнце?"){

    }else{
      ctx.reply("ТЫ БЛИН!!! Я ЗНАЮ ЧТО ТЫ СЕДРИК!!! ПРОХОДИ ЗАНОВО !!! НЕТ ТАКОВО ВАРИАНТА ОТВЕТА!!")
      ctx.scene.leave();
    }
    setTimeout(function(){ctx.reply('Дождь или солнце?', null, Markup
      .keyboard([
        [
          Markup.button('Дождь', 'primary'), //Пуфендой ++
          Markup.button('Солнце', 'primary'), //Слизерин ++
        ],
      ])
      .oneTime()
      );
      ctx.scene.next();
    }, 10000)
    
  },
  (ctx) => {
    if(ctx.message.text === "Дождь"){
      ctx.session.Slizerin += 1;
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Солнце"){
      ctx.session.Grifendor += 1;
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "Орел или решка?"){

    }else{
      ctx.reply("ТЫ БЛИН!!! Я ЗНАЮ ЧТО ТЫ СЕДРИК!!! ПРОХОДИ ЗАНОВО !!! НЕТ ТАКОВО ВАРИАНТА ОТВЕТА!!")
      ctx.scene.leave();
    }

    setTimeout(function(){
    ctx.reply('Орел или решка?', null, Markup
    .keyboard([
      [
        Markup.button('Орел', 'primary'), //Грифендор ++
        Markup.button('Решка', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Орел"){
      ctx.session.Slizerin += 1;
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Решка"){
      ctx.session.Koktevram += 1;
      ctx.session.Pufindor += 1;
    }else if (ctx.message.text === "Чем будет пахнуть амортенция для тебя?"){
      
    }
    setTimeout(function(){
    ctx.reply('Чем будет пахнуть амортенция для тебя?', null, Markup
    .keyboard([
      [
        Markup.button('потрескивающим огнем', 'primary'), //Грифендор ++
        Markup.button('морем', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('свежим пергаментом', 'primary'), //Грифендор ++
        Markup.button('домом', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "потрескивающим огнем"){
      
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "морем"){
      ctx.session.Slizerin += 1;
    }else if(ctx.message.text === "свежим пергаментом"){
      
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "домом"){
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "С какими из проблем тебе было бы труднее справиться?"){

    }else{
      ctx.reply("ТЫ БЛИН!!! Я ЗНАЮ ЧТО ТЫ СЕДРИК!!! ПРОХОДИ ЗАНОВО !!! НЕТ ТАКОВО ВАРИАНТА ОТВЕТА!!")
      ctx.scene.leave();
    }
    setTimeout(function(){
    ctx.reply('С какими из проблем тебе было бы труднее справиться?', null, Markup
    .keyboard([
      [
        Markup.button('Холод', 'primary'), //Грифендор ++
        Markup.button('Одиночество', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('Скука', 'primary'), //Грифендор ++
        Markup.button('Игнорирование', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Холод"){
      ctx.session.Pufindor += 1;
      
    }else if(ctx.message.text === "Одиночество"){
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Скука"){
      
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Игнорирование"){
      ctx.session.Slizerin += 1;
    }else if(ctx.message.text === "На каком бы музыкальном инструменте хотел бы научиться играть?"){

    }
    setTimeout(function(){
    ctx.reply('На каком бы музыкальном инструменте хотел бы научиться играть?', null, Markup
    .keyboard([
      [
        Markup.button('Скрипка', 'primary'), //Грифендор ++
        Markup.button('Труба', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('Пианино', 'primary'), //Грифендор ++
        Markup.button('Барабан', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Скрипка"){
      ctx.session.Slizerin += 1;
    }else if(ctx.message.text === "Труба"){
      
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Пианино"){
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Барабан"){
      ctx.session.Pufindor += 1;
      
    }else if(ctx.message.text === "Как ты думаешь, каких людей должно быть больше?"){

    }
    setTimeout(function(){
    ctx.reply('Как ты думаешь, каких людей должно быть больше?', null, Markup
    .keyboard([
      [
        Markup.button('Мудрых', 'primary'), //Грифендор ++
        Markup.button('Добрых', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('Великих', 'primary'), //Грифендор ++
        Markup.button('Смелых', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Мудрых"){
      ctx.session.Slizerin += 1;
    }else if(ctx.message.text === "Добрых"){
      
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Великих"){
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Смелых"){
      ctx.session.Pufindor += 1;
      
    }else if(ctx.message.text === "Какая дорога притягивает тебя?"){

    }
    setTimeout(function(){
    ctx.reply('Какая дорога притягивает тебя?', null, Markup
    .keyboard([
      [
        Markup.button('Широкая, солнечная дорога', 'primary'), //Грифендор ++
        Markup.button('Узкая, темная', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('Извилистая, узкая тропинка', 'primary'), //Грифендор ++
        Markup.button('Твердая дорога магистрали', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Широкая, солнечная дорога"){
      
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "Узкая, темная"){
      ctx.session.Slizerin += 1;
      
    }else if(ctx.message.text === "Извилистая, узкая тропинка"){
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Твердая дорога магистрали"){
      
      ctx.session.Koktevram += 1;
      
    }else if(ctx.message.text === "Кем предпочел бы стать"){

    }
    setTimeout(function(){
    ctx.reply('Кем предпочел бы стать', null, Markup
    .keyboard([
      [
        Markup.button('Объектом зависти', 'primary'), //Грифендор ++
        Markup.button('Примером для подражания', 'primary'), //Слизерин ++
      ],
      [
        Markup.button('Тем, кто заслуживает доверия', 'primary'), //Грифендор ++
        Markup.button('Тем, кого все боятся', 'primary'), //Слизерин ++
      ],
    ])
    .oneTime()
  );
  ctx.scene.next();
    }, 10000)
  },
  (ctx)=>{
    if(ctx.message.text === "Объектом зависти"){
      ctx.session.Grifendor += 1;
    }else if(ctx.message.text === "Примером для подражания"){
      ctx.session.Koktevram += 1;
    }else if(ctx.message.text === "Тем, кто заслуживает доверия"){
      ctx.session.Pufindor += 1;
    }else if(ctx.message.text === "Тем, кого все боятся"){
      ctx.session.Slizerin += 1;
    }
    let arr = [ctx.session.Koktevram, ctx.session.Slizerin, ctx.session.Grifendor, ctx.session.Pufindor]
    console.log(arr)
    var largest = Math.max.apply(Math, arr);
    if(ctx.session.Koktevram == largest ){
      ctx.reply(`Добро пожаловать в Когтевран\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Koktevram}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Koktevram}`)
      database.Get_dataBase().User[ctx.message.from_id] = {};
      database.Get_dataBase().User[ctx.message.from_id].Facult = 'Koktevram'
    }
    else if(ctx.session.Slizerin == largest ){
      ctx.reply(`Добро пожаловать в Слизерин\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Slizerin}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Slizerin}`)
      database.Get_dataBase().User[ctx.message.from_id] = {};
      database.Get_dataBase().User[ctx.message.from_id].Facult = 'Slizerin'
    }
    else if(ctx.session.Grifendor == largest ){
      ctx.reply(`Добро пожаловать в Гриффиндор\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Grifendor}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Grifendor}`)
      database.Get_dataBase().User[ctx.message.from_id] = {};
      database.Get_dataBase().User[ctx.message.from_id].Facult = 'Grifendor'
    }
    else if(ctx.session.Pufindor ==  largest){
      ctx.reply(`Добро пожаловать в Пуффендуй\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Pufindor}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Pufindor}`)
      database.Get_dataBase().User[ctx.message.from_id] = {};
      database.Get_dataBase().User[ctx.message.from_id].Facult = 'Pufindor'
    }
    else{
      ctx.reply('Я сомневаюсь в ответе. Попробуй пройти ещё раз')

    }
    ctx.scene.leave();
  ctx.scene.leave();
  },
);
const session = new Session();
const stage = new Stage(scene);

bot.use(session.middleware());
bot.use(stage.middleware());

bot.command('НачатьK', (ctx) => {
  ctx.reply(`Добро пожаловать в Гриффиндор\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Koktevram}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Koktevram}`)
})
bot.command('НачатьG', (ctx) => {
  ctx.reply(`Добро пожаловать в Гриффиндор\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Grifendor}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Grifendor}`)
})
bot.command('НачатьP', (ctx) => {
  ctx.reply(`Добро пожаловать в Гриффиндор\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Pufindor}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Pufindor}`)
})
bot.command('НачатьS', (ctx) => {
  ctx.reply(`Добро пожаловать в Гриффиндор\n\nПри вопросах обращаться => https://vk.com/id606432183\n\nВот твой стараста Факультета => ${database.Get_dataBase().Facult.Starasta.Slizerin}\n\nВот твой гостинная Факультета => ${database.Get_dataBase().Facult.home_site.Slizerin}`)
})

bot.command('Начать', (ctx) => {
  console.log(ctx.message.from_id)
  if(!database.Get_dataBase().User[ctx.message.from_id]){
    ctx.scene.enter('TEST');
  }else{
    ctx.reply('Вы уже проходили тестирование !!')
  }
  
});

bot.command('ADMID', (ctx) => {
  console.log(ctx.message.from_id)
  ctx.reply(ctx.message.from_id)
  
});
bot.on((ctx) => {
  console.log(ctx.message.text.startsWith("add"))
    if(ctx.message.text.startsWith("add")){
      let t = 0;
      for(let i = 0; i< database.Get_dataBase().ADMIN.User.length; i++){
        if(ctx.message.from_id == database.Get_dataBase().ADMIN.User[i]){
          t ++;
        }else{

        }
      }
      if(t == 1){
          let per = (ctx.message.text.split(' ')).slice(1)
          console.log(per);
          if(per[0] === "K"){
            add_OCH(false,(Number(per[1])), false, false, database, client).then(()=>{
              ctx.reply('Добавлены баллы для факультета')
            })
          }else if(per[0] === "C"){
            add_OCH(false, false, false, (Number(per[1])), database, client).then(()=>{
              ctx.reply('Добавлены баллы для факультета')
            })
          }else if(per[0] === "Г"){
            add_OCH((Number(per[1])), false, false, false, database, client).then(()=>{
              ctx.reply('Добавлены баллы для факультета')
            })
          }else if(per[0] === "П"){
            add_OCH(false, false, (Number(per[1])), false, database, client).then(()=>{
              ctx.reply('Добавлены баллы для факультета')
            })
          }
      }else{
        ctx.reply("У тебя нет прав на упользования этой комманды !")
      }
    }else if(ctx.message.text.startsWith("set")){
      let t = 0;
      for(let i = 0; i< database.Get_dataBase().ADMIN.User.length; i++){
        if(ctx.message.from_id == database.Get_dataBase().ADMIN.User[i]){
          t ++;
          break;
        }else{

        }
      }
      if(t == 1){
          let per = (ctx.message.text.split(' ')).slice(1)
          console.log(per);
          console.log(Number(per[1]));
          if(per[0] === "K"){
            set_OCH(false,(Number(per[1])), false, false, database, client).then(()=>{
              ctx.reply('Установлены баллы для факультета')
            })
          }else if(per[0] === "C"){
            set_OCH(false, false, false, (Number(per[1])), database, client).then(()=>{
              ctx.reply('Установлены баллы для факультета')
            })
          }else if(per[0] === "Г"){
            set_OCH((Number(per[1])), false, false, false, database, client).then(()=>{
              ctx.reply('Установлены баллы для факультета')
            })
          }else if(per[0] === "П"){
            set_OCH(false, false, (Number(per[1])), false, database, client).then(()=>{
              ctx.reply('Установлены баллы для факультета')
            })
          }
      }else{
        ctx.reply("У тебя нет прав на упользования этой комманды !")
      }
    }
});


async function add_OCH (G, K, P, S, database, client){

  let code
  if(G !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor += G}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(K !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram += K}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(P !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor += P}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(S !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin += S}",
        }]
      ]
    };`
  }
  client.apiPost("appWidgets.update",{
    type:'table',
    code: code,
    access_token: '4d08d0b4600434541eb62cf3cdebbd83b4875e661794cc6325001fbca5363602c50c2a1c0e725a8b107e5',
    v: '5.131',

  })
  .then(response => {})
  .catch(error => console.log(error));
};
async function set_OCH (G, K, P, S, database, client){

  let code
  if(G !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${G}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(K !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${K}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(P !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${P}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Slizerin}",
        }]
      ]
    };`
  }else if(S !== false){
    code = `return { 
      "title": "Очки факультетов",  
      "head": [{ 
          "text": "Факультеты" 
      }, { 
          "text": "Очки", 
      }], 
      "body": [
        [{
            "text": "Гриффиндор",
            "icon_id": "id-208824511"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Grifendor}",
        }],
        [{
            "text": "Когтевран",
            "icon_id": "id-208824585"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Koktevram}",
        }
        ],
        [{
            "text": "Пуффендуй",
            "icon_id": "id-208837160"
        },
        {
            "text": "${database.Get_dataBase().Facult.ball.Pufindor}",
        }],
        [{
            "text": "Слизерин",
            "icon_id": "id-208824531"
        },
        {
            "text": "${S}",
        }]
      ]
    };`
  }
    client.apiPost("appWidgets.update",{
      type:'table',
      code: code,
      access_token: '4d08d0b4600434541eb62cf3cdebbd83b4875e661794cc6325001fbca5363602c50c2a1c0e725a8b107e5',
      v: '5.131',
  
    })
    .then(response => {})
    .catch(error => console.log(error));
  };

bot.startPolling().then(()=>{
  console.log('successfully logged in discord!');
	database.load('./database.json');
});

process.on("SIGINT", () => {
	console.log('closing...');
	database.save();
  process.exit();
});