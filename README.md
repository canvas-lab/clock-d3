# Clock-D3

## 실행
```sh
$ npm start
```

## 설명
radius: 반지름

```javascript
var arc = d3.arc();

arc({
  innerRadius: 0,
  outerRadius: 100,
  startAngle: 0,
  endAngle: Math.PI / 2
}); // "M0,-100A100,100,0,0,1,100,0L0,0Z"
```
