//Temporarily given up on ticker

/*Template.ticker.event_queue = function(){
    return window.ticker?window.ticker.queue:null;
}

Template.ticker.preserve(['.ticker']);

Meteor.startup(function(){
    window.ticker = (function(){
        var queue=[];
        var max_size=3;
        var id=0;

        function alertSuccess(message){
            queue.push({
                id:id,
                html:'<div class="alert alert-success" id="'+id+'">'+
                    '<a href="#" class="close" onclick=function(){ticker.remove(this)} data-dismiss="alert">&times;</a> '+
                    '<strong>Success!</strong>' + message +
                    '</div>'
            });

            if(queue.length > max_size){
                queue.splice(0,1);
            }

            id++;
            render();
        }

        function alertError(message){
            queue.push({
                id:id,
                html:'<div class="alert alert-error" id="'+id+'">'+
                    '<a href="#" class="close" onclick=function(){ticker.remove(this)}  data-dismiss="alert">&times;</a> '+
                    '<strong>Success!</strong>' + message +
                    '</div>'
            });

            if(queue.length > max_size){
                queue.splice(0,1);
            }

            id++;
            render();
        }

        function alertInfo(message){
            queue.push({
                id:id,
                html:'<div class="alert alert-info" id="'+id+'">'+
                    '<a href="#" class="close" onclick=function(){ticker.remove(this)}  data-dismiss="alert">&times;</a> '+
                    '<strong>Success!</strong>' + message +
                    '</div>'
            });

            if(queue.length > max_size){
                queue.splice(0,1);
            }

            id++;
            render();
        }

        function render(){
            $('.ticker').html("");

            for(var i=0;i<max_size;i++){
                if(queue[i])
                    $('.ticker').prepend(queue[i].html);
            }
        }

        function remove(alert_div){
            var div_id=alert_div.attr("id");

            for(var i=0;i<max_size;i++){
                if(queue[i].id==div_id){
                    if(confirm('remove queue['+i+']')){
                        queue.splice(i,1);
                    }
                    break;
                }
            }
        }

        return {
            alertSuccess : alertSuccess,
            alertError : alertError,
            alertInfo : alertInfo,
            render : render,
            remove : remove,
            queue : queue
        };
    })();
});                     */