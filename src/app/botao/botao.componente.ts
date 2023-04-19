import { Component, Output,EventEmitter } from "@angular/core";


@Component({
selector: 'Botao',
templateUrl: './botao.component.html'

})
export class BotaoComponent{

    @Output()
    clickBotao= new EventEmitter

    @Output()
    mouseover= new EventEmitter

    Botaoclick(): void{
        console.log("Olá ")
        this.clickBotao.emit()
    }

    MouseOver():void{
        console.log('CERTO')
        this.mouseover.emit();
    }

}