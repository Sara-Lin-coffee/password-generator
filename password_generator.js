//定義
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '0123456789'
const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'


//亂數函式
function sample(array) {
  index = Math.floor(Math.random() * array.length)
  return array[index]
}

//定義密碼產生器函式
function passwordGenerator(options){

  //收集使用者需求  
  let collection = []

    //--放入使用者選擇的元素
  if (options.lowercase === 'on'){
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

    //--剔除使用者不想放的元素
  if (options.excludeCharacters) {
      //用filter()函式確認設定條件，回傳true時該條件會被保留，回傳false時，該條件會被捨棄
    collection = collection.filter(character => !options.excludeCharacters.includes(character)
      //遍歷collection裡面的每個字母，如果排除項目裡面有這個字母，collection array就不保留此字母，反之保留。
    )
  }

  //回傳錯誤if collection is empty
  if (collection.length === 0){
    return 'There is no valid character in your selection.'
  }

  //開始產生密碼
  let password = ''
  for (let i = 1; i <= options.length; i++){
    password += sample(collection)
  }
 
  //回傳密碼
  return password
}

//啟動密碼產生器
module.exports = passwordGenerator