/* eslint-disable */

let inkjs = require('inkjs')

var storyContent = {"inkVersion":18,"root":[["^Hello","\n","^World","\n","^!","\n",["ev",{"^->":"0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-0","flg":18},{"s":["^choice 1",{"->":"$r","var":true},null]}],["ev",{"^->":"0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":"0.c-1","flg":18},{"s":["^choice 2",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":"0.6.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-0"},{"#f":7}],"c-1":["ev",{"^->":"0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":"0.7.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-0"},{"#f":7}],"g-0":["done",{"#f":7}]}],"done",{"#f":3}],"listDefs":{}}

var story = new inkjs.Story(storyContent)

export default story
