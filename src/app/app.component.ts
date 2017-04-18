import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sanitzer: DomSanitizer) {};

  public safeEmojis: SafeHtml[] = [];
  public emojiCount: number = 0;
  emojis = ['🧀','🥑','🍕','🌭','🌮','🌯','🍔','🍟','🥓','🍖'];
  public score: number = 0;

  addEmojis() {

    var randomRepeat = Math.floor(Math.random()*3);
    for (var i=0; i<randomRepeat; i++) {
      var randomHeight = Math.random()*100;
      var randomEmoji = Math.floor(Math.random()*10);
      var randomSpeed = Math.floor(Math.random()*10)+20;
      var addEmojis = '<div class="emoji emojioverlay" id="emoji'+this.emojiCount+'" style="position:absolute;top:'+randomHeight+'vh;left:-100px; animation: moveright '+randomSpeed+'s;"><h1>'+this.emojis[randomEmoji]+'</h1></div>';
      this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
      this.emojiCount += 1;
    }
    var randomRepeat = Math.floor(Math.random()*3);
    for (var i=0; i<randomRepeat; i++) {
      var randomWidth = Math.random()*100;
      var randomEmoji = Math.floor(Math.random()*10);
      var randomSpeed = Math.floor(Math.random()*10)+20;
      var addEmojis = '<div class="emoji emojioverlay" id="emoji'+this.emojiCount+'" style="position:absolute;top:-100px;left:'+randomWidth+'vw;  animation: movedown '+randomSpeed+'s;"><h1>'+this.emojis[randomEmoji]+'</h1></div>';
      this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
      this.emojiCount += 1;
    }
    var randomRepeat = Math.floor(Math.random()*3);
    for (var i=0; i<randomRepeat; i++) {
      var randomWidth = Math.random()*100;
      var randomEmoji = Math.floor(Math.random()*10);
      var randomSpeed = Math.floor(Math.random()*10)+20;
      var addEmojis = '<div class="emoji emojioverlay" id="emoji'+this.emojiCount+'" style="position:absolute;top:110vh;left:'+randomWidth+'vw;  animation: moveup '+randomSpeed+'s;"><h1>'+this.emojis[randomEmoji]+'</h1></div>';
      this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
      this.emojiCount += 1;
    }
    var randomRepeat = Math.floor(Math.random()*3);
    for (var i=0; i<randomRepeat; i++) {
      var randomHeight = Math.random()*100;
      var randomEmoji = Math.floor(Math.random()*10);
      var randomSpeed = Math.floor(Math.random()*10)+20;
      var addEmojis = '<div class="emoji emojioverlay" id="emoji'+this.emojiCount+'" style="position:absolute;top:'+randomHeight+'vh;left:110vw;  animation: moveleft '+randomSpeed+'s;"><h1>'+this.emojis[randomEmoji]+'</h1></div>';
      this.safeEmojis.push(this.sanitzer.bypassSecurityTrustHtml(addEmojis));
      this.emojiCount += 1;
    }
    this.score = this.emojiCount;

  }


  destroyEmoji(event) {
    for (var i=0; i<this.emojiCount; i++){
      let el = document.getElementById('emoji'+i);
      window.requestAnimationFrame(function(){
        if (el) {


        var rect = el.getBoundingClientRect()
        if (Math.abs(rect.top - event.clientY) < 50 && Math.abs(rect.left - event.clientX) < 50) {
          el.parentElement.removeChild(el);
        }
      }
      });

    }

  }
}
