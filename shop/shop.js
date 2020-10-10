/* 
* @Author: 相濡以沫
* @Date:   2020-10-10 15:50:30
* @Last Modified by:   相濡以沫
* @Last Modified time: 2020-10-10 16:30:25
*/

'use strict';


var app = new Vue({
    el : '#app',

    data : {
        list : [
            { 
                id : 1,
                name : 'iphone8',
                price : '3888',
                count : 1
            },
            { 
                id : 2,
                name : 'iphone8 Plus',
                price : '4188',
                count : 2
            },
            { 
                id : 3,
                name : 'iphone11',
                price : '4888',
                count : 1
            },
            { 
                id : 4,
                name : 'iphone11 Pro',
                price : '5888',
                count : 3
            }
        ]
    },


    methods : {
        add : function(index){
            this.list[index].count ++;
            if(this.list[index].count <= 0){ this.list[index].count = 0;this.remove(index) }
        },

        reduce : function(index){
            this.list[index].count --;
            if(this.list[index].count <= 0){ this.list[index].count = 0;this.remove(index) }
        },

        remove : function(index){
            trace('remove' + index)
            this.list.splice(index, 1)
        },

        choiceAll : function(){

        }
    },

    computed : {
        totalPrice : function(){
            var total = 0;
            for(let i = 0;i < this.list.length;i++){
                total += parseInt(this.list[i].price) * parseInt(this.list[i].count)
            }
            return total
        }
    }
})

const trace = console.log