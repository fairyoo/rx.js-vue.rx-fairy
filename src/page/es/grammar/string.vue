<template>
  <div class="esGrammarString">  
    app/es/grammar/string<br/><br/>  
            
    <hr/><br/>
    字符的 Unicode 表示法 <br/>

    let abc = "\u{41}\u{42}\u{43}";// "ABC"

    let hello = 123;
    hell\u{6F} // 123

    <hr/><br/>
    codePointAt()   codePointAt方法会正确返回32位的UTF-16字符的码点<br/>
    codePointAt方法是测试一个字符由两个字节还是由四个字节组成的最简单方法。<br/>

    var s = 'a';
    s.codePointAt(0) // 134071
    s.codePointAt(1) // 57271
    s.codePointAt(2) // 97
    //
    codePointAt方法返回的是码点的十进制值，如果想要十六进制的值，可以使用toString方法转换一下。
    var s = 'a';
    s.codePointAt(0).toString(16) // "20bb7"
    s.codePointAt(2).toString(16) // "61"


    <hr/><br/>
    String.fromCodePoint方法，可以识别0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。<br/>
    
    String.fromCodePoint(0x20BB7)// ""
    String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'// true


    <hr/><br/>
    字符串的遍历器接口<br/>
    for (let codePoint of 'foo') {
    console.log(codePoint)
    }
    // "f"
    // "o"
    // "o"

    <hr/><br/>
    at()<br/>
    'abc'.at(0) // "a"
    ''.at(0) // ""

    <hr/><br/>
    normalize() 用来将字符的不同表示方法统一为同样的形式，这称为Unicode正规化<br/>
    '\u01D1'.normalize() === '\u004F\u030C'.normalize()
    // true

    <hr/><br/>
    includes(), startsWith(), endsWith()  repeat() padStart()，padEnd()<br/>

    var s = 'Hello world!';

    s.startsWith('Hello') // true
    s.endsWith('!') // true
    s.includes('o') // true

    'x'.repeat(3) // "xxx"
    'hello'.repeat(2) // "hellohello"
    'na'.repeat(0) // ""


    'x'.padStart(5, 'ab') // 'ababx'
    'x'.padStart(4, 'ab') // 'abax'

    'x'.padEnd(5, 'ab') // 'xabab'
    'x'.padEnd(4, 'ab') // 'xaba'
    <hr/><br/>
    <br/>


    <hr/><br/>
    <br/>


    <hr/><br/>
    <br/>


    <hr/><br/>
    <br/>


  </div>
</template>


<script>
export default {
  name: 'esGrammarString',
  methods: {
    test () {
    }
  },
  beforeCreate () {
  }
};

</script>