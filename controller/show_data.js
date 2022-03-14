const homePageData = (req,res) => {
    try {
        const data = [
          {
            id: 1,
            header: 'Good Morning',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://i.pinimg.com/originals/fa/91/74/fa91748fd7a73ff50cf638d4761df282.jpg',
              },
              {
                id: 2,
                img: 'https://play-lh.googleusercontent.com/--JH3ql4DPM291um4zSOK-pdlkcbt5kVw-0L98sud-78O340annEDge6L0U7Nbz3070',
              },
              {
                id: 3,
                img: 'https://i.pinimg.com/236x/5c/5f/f7/5c5ff73438b6abc2731921f70206cedb--good-morning-cards.jpg',
              },
              {
                id: 4,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLChpFWR2DIo6XgfH6PoceTY_dny8CQxReA&usqp=CAU',
              },
              {
                id: 5,
                img: 'https://muskaanhindi.com/wp-content/uploads/2021/06/white-lily-morning-wish-693x1024.jpg',
              },
              {
                id: 6,
                img: 'https://www.pixtrends.com/wp-content/uploads/2020/08/single-white-flower-Good-Morning-images.jpg',
              },
            ],
          },
          {
            id: 2,
            header: 'Corona Tips',
            view: 'View All',
            image: [
              {id: 1, img: 'https://pbs.twimg.com/media/EiTMIsFWoAAOY3U.jpg'},
              {
                id: 2,
                img: 'https://www.who.int/images/default-source/health-topics/coronavirus/risk-communications/general-public/protect-yourself/blue-1.png?sfvrsn=3d15aa1c_2',
              },
              {
                id: 3,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjW8dPzaZL03v2MvODMelVgvgpdUTCyPfCCaC19NWWOXqOd1OtHtKmOHCjn6rGbza5BR4&usqp=CAU',
              },
            ],
          },
          {
            id: 3,
            header: 'Suvichar (Gujrati)',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://i.pinimg.com/564x/24/97/c2/2497c25a1d1034953d1841e125f3f4ce.jpg',
              },
              {
                id: 2,
                img: 'https://play-lh.googleusercontent.com/s-tWeZaaDU0ra81-ITEEteAIwOLJPDRuQ_GCQ-Tz-qBjY-qovd01zxMkf71F2qYo4Q=w412-h220-rw',
              },
              {
                id: 3,
                img: 'data:image/jpeg;base64,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',
              },
              {
                id: 4,
                img: 'https://image.winudf.com/v2/image1/Y29tLnF1b3Rlcy5ndWphcmF0aXN0YXR1c19zY3JlZW5fMTdfMTU0NTQxNjc5Nl8wMDE/screen-17.jpg?h=355&fakeurl=1&type=.jpg',
              },
              {
                id: 5,
                img: 'https://lh3.googleusercontent.com/c9k9cB-21j7_JnSJVmPqJDTkKiwleTGPfvgiVYFluFpYcBsXkiDA08s9gAIbp7pbCrs=w412-h220-rw',
              },
            ],
          },
          {
            id: 4,
            header: 'Suvichar (Hindi)',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://funkylife.in/wp-content/uploads/2021/06/hindi-suvichar-13.jpg',
              },
              {
                id: 2,
                img: 'https://funkylife.in/wp-content/uploads/2021/06/hindi-suvichar-45.jpg',
              },
              {
                id: 3,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_MYCTD5PpVvZDgdcLoMXDF4AsANILe0X8Bg&usqp=CAU',
              },
              {
                id: 4,
                img: 'https://helostatus.com/wp-content/uploads/2021/10/%E0%A4%96%E0%A5%82%E0%A4%AC%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%A4-%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%AB%E0%A5%8B%E0%A4%9F%E0%A5%8B-.png',
              },
              {
                id: 5,
                img: 'https://www.bharatprime.in/wp-content/uploads/2020/09/%E0%A4%86%E0%A4%9C-%E0%A4%95%E0%A4%BE-%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E2%80%93-%E0%A4%B8%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%B7%E0%A5%8D%E0%A4%A0-%E0%A4%B8%E0%A5%81%E0%A4%B5%E0%A4%BF%E0%A4%9A%E0%A4%BE%E0%A4%B0-%E0%A4%B9%E0%A4%BF%E0%A4%82%E0%A4%A6%E0%A5%80-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%85%E0%A4%A8%E0%A4%AE%E0%A5%8B%E0%A4%B2-%E0%A4%B5%E0%A4%9A%E0%A4%A8.png',
              },
            ],
          },
          {
            id: 5,
            header: 'Good Night',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://funkylife.in/wp-content/uploads/2021/08/good-night-quotes-16.jpg',
              },
              {
                id: 2,
                img: 'https://i.pinimg.com/originals/f3/91/74/f391742ed93869ba1988fa60ad5875c5.jpg',
              },
              {
                id: 3,
                img: 'https://rukminim1.flixcart.com/image/416/416/kg8avm80/table-lamp/f/p/z/3d-good-night-sweet-dreams-night-lamp-7-color-chang-light-for-original-imafwgfvgnuhsvh3.jpeg?q=70',
              },
              {
                id: 4,
                img: 'https://goodmorningland.com/wp-content/uploads/2020/05/Latest-Good-Night-Images-for-everyone-2021-623x623.jpg',
              },
              {
                id: 5,
                img: 'https://funkylife.in/wp-content/uploads/2021/08/good-night-pic-20.jpg',
              },
            ],
          },
          {
            id: 6,
            header: 'Motivation',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://1.bp.blogspot.com/-2cJn8-lhc0g/YAuN2dh4i6I/AAAAAAAAE0o/BPXczL1fXfgDPnlieKySdMa5Wu3WW-3IQCLcBGAsYHQ/s16000/best%2Bmotivational%2Bquotes%2Bin%2Bhindi%2B1.webp',
              },
              {
                id: 2,
                img: 'http://www.theemergingindia.com/wp-content/uploads/2019/06/Good-Morning-Motivational-Images-in-Hindi.jpg',
              },
              {
                id: 3,
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1ihKAT7rhdSWvbu3NaefDVgJsVA7b50jCtxkb4tdeOecbSw5_ce6lotnGuWg6xAOwnpc&usqp=CAU',
              },
              {
                id: 4,
                img: 'https://helostatus.com/motivational-quotes-in-hindi/motivational-quotes-in-hindi-5/',
              },
              {
                id: 5,
                img: 'https://media.istockphoto.com/photos/the-best-way-to-predict-the-future-is-to-create-it-motivational-quote-picture-id1304357935?b=1&k=20&m=1304357935&s=170667a&w=0&h=tflkvGz1i1XroFMBz4chm33aWj8UbmehLDKjeuhJ-pk=',
              },
            ],
          },
          {
            id: 7,
            header: 'Wish Messages',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://www.wishesmsg.com/wp-content/uploads/good-wishes.jpg',
              },
              {
                id: 2,
                img: 'https://www.wishesmsg.com/wp-content/uploads/Best-Wishes-Message.jpg',
              },
              {
                id: 3,
                img: 'https://www.wishesmsg.com/wp-content/uploads/All-The-Best-Messages.jpg',
              },
              {
                id: 4,
                img: 'https://www.wishesmsg.com/wp-content/uploads/Best-Wishes-Quotes.jpg',
              },
              {
                id: 5,
                img: 'https://messages.365greetings.com/wp-content/uploads/2012/05/congratulation-messages.jpg',
              },
            ],
          },
          {
            id: 8,
            header: 'Business Ethics',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/08/07193702/Business-Ethics-1-1024x1024.png',
              },
              {
                id: 2,
                img: 'https://image.freepik.com/free-vector/hand-drawn-business-ethics-illustration_23-2148725567.jpg',
              },
              {
                id: 3,
                img: 'https://www.managementguru.net/wp-content/uploads/2014/03/corporate-ethics.png',
              },
              {
                id: 4,
                img: 'https://qph.fs.quoracdn.net/main-qimg-355635770e9a50f82b26411cc3ad2669.webp',
              },
              {
                id: 5,
                img: 'https://ctmfile.com/assets/ugc/images/OPS_DEL_ethics_and_compliance_framework_.png',
              },
            ],
          },
          {
            id: 9,
            header: 'positive Quotes',
            view: 'View All',
            image: [
              {
                id: 1,
                img: 'https://i.pinimg.com/564x/24/97/c2/2497c25a1d1034953d1841e125f3f4ce.jpg',
              },
              {
                id: 2,
                img: 'https://play-lh.googleusercontent.com/s-tWeZaaDU0ra81-ITEEteAIwOLJPDRuQ_GCQ-Tz-qBjY-qovd01zxMkf71F2qYo4Q=w412-h220-rw',
              },
              {
                id: 3,
                img: 'data:image/jpeg;base64,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',
              },
              {
                id: 4,
                img: 'https://image.winudf.com/v2/image1/Y29tLnF1b3Rlcy5ndWphcmF0aXN0YXR1c19zY3JlZW5fMTdfMTU0NTQxNjc5Nl8wMDE/screen-17.jpg?h=355&fakeurl=1&type=.jpg',
              },
              {
                id: 5,
                img: 'https://lh3.googleusercontent.com/c9k9cB-21j7_JnSJVmPqJDTkKiwleTGPfvgiVYFluFpYcBsXkiDA08s9gAIbp7pbCrs=w412-h220-rw',
              },]
            }
        ]
            
        console.log(req.cookies)
        // res.json(data)
        res.send(data)
      } catch (error) {
        res.json({ message: error });
      }
}



module.exports = {
    homePageData,
  }