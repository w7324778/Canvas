import './index.css'
import RoundItem from './assets/js/Round_item.js'
let canvas = document.getElementById('canvas')
let content = canvas.getContext('2d')
let WIDTH = document.documentElement.clientWidth
let HEIGHT = document.documentElement.clientHeight
console.log(WIDTH,HEIGHT)
canvas.width = WIDTH
canvas.height = HEIGHT

const initRoundPopulation =80; 
const round = []
RoundItem.init({initRoundPopulation,round,WIDTH,HEIGHT,content})