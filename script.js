// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
var messageSpan = document.getElementById('q1-text')
console.log(messageSpan.textContent)

// Q 2
var messageSpan = document.getElementById('q2-text')
messageSpan.textContent = '你好，我是冲绳人！'



// Q 3

var messageSpan = document.getElementById('q3-text')
messageSpan.style.color = 'orange'

// Q 4 (難)
// 「for of」を使います。

var messageSpan = document.getElementsByClassName('q4-text')
console.log(messageSpan)
for (var i = 0;i < messageSpan.length;i++)
	{
		messageSpan[i].style.color = 'blue'
	}

// Q 5

var messageSpan = document.getElementsByClassName('q5-text')
console.log(messageSpan)
for (var i = 0;i < messageSpan.length;i++)
	{
		messageSpan[i].style.backgroundColor = 'yellow'
	}


// Q 6

let q6 = document.querySelector('#q6-text');
q6.addEventListener('click',function(){
	this.style.color = 'green';
});



// Q 7
let q7 = document.querySelector('#q7-text');
q7.addEventListener('mouseover',function(){
	this.style.color = 'magenta';
	this.style.backgroundColor = 'pink';
});



// Q 8
let q8 = document.querySelector('#q8-text');
q8.addEventListener('mouseover',function(){
	this.style.backgroundColor = 'lime';
})
q8.addEventListener('mouseleave',function(){
	this.style.backgroundColor = '';
});



// Q 9
//↓フォームの中の操作
//inputタグ入力情報の取得（空欄タグのこと　ex.名前欄）
var input = document.querySelector('#input_name');

//読み込んだときは空欄なので、いつも空文字が表示される
console.log(input.value);

//送信ボタンがクリックされた時に実行される関数
function getInput(){
	console.log('aaaa');
	var input = document.querySelector('#input_name');

	console.log(input.value);
	//値の編集
	input.value = input.value + '様';
};

↑エラーになる(☝︎ ՞ਊ ՞)☝︎

// Q 10

var input = document.querySelector("#q10-input");

