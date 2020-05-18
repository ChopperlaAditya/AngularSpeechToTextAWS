import {Component, OnInit} from '@angular/core';
import * as Polly from 'polly-tts';
//import WriteStream = NodeJS.WriteStream;
//import * as fs from 'fs';

@Component({
    selector: 'app-text-to-speech',
    templateUrl: './text-to-speech.component.html',
    styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.tts();
    }

    tts() {
       // const fs = require('fs');
       // const Polly = require('polly-tts');
        const polly = new Polly();
        const options = {
            text: 'Hello',
            textType: 'text',
            outputFormat: 'mp3'
        };
        //const fileStream = this.createWriteStream('polly-tts.mp3');
        const fileStream = null;
        polly.textToSpeech(options, (err, audioStream) => {
            if (err) {
                return console.log(err.message);
            }
            console.log('inside');
            audioStream.pipe(fileStream);
        });
    }

    /*createWriteStream(path: string, options?: string | {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
    }): Object;*/

}
