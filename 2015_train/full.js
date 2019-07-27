//
// Code by Reinder Nijhoff for js1k
// 2015
// compressed using Regpack v3.0.2
//
// Twitter: @reindernijhoff
// Website: https://reindernijhoff.net
//

t = 0,

// linear interpolation of heightmap
N = function(l) {
  return b[~~l] -l%1 * b[~~l] + l%1 * b[~~l+1]
},

setInterval(function(l) {
  if ( !t )
    for (
      // random colors
      e = 5+40 * Math.random(),
      n = .6 * Math.random(),
      h = "hsl(" + [200 + 80 * Math.random(), "100%", e + 20 * Math.random() + "%)"],
      l = "hsl(" + [200 * Math.random(), "50%", e+20 * Math.random()+"%)"],
      e *= 4,
      m = "hsl(" + [200 + 180 * Math.random(), "100%", e + 20 * Math.random() + "%)"],
      i = -1; 6 > i++;) {

        // heightmap values for layer
        for (f = 1e4; f--;) b[f] = Math.random();

        // setup layer and draw sprite (used for clouds and trees)
        for (
          M = a.width + 400 * (N[i] = i * i / (6 ^ i ? 8 : 2)),
          S = 80 * (7 - i) / (o = a.height),
          g = Math.random(),
          Z = z = a.cloneNode(),
          z.height = z.width = 60,
          s = z.getContext("2d"),
          w = s.createLinearGradient(0, 0, 0, 120),
          w.addColorStop(0, m),
          w.addColorStop(1, h),
          s.fillStyle = !i&&w,
          f = 300; f--;)
            for (x = 30; f / 9 < x--;)
              s.fillRect(30 + x * Math.cos(f) * Math.cos(f * Math.sin(f)), 30 + x *  Math.sin(f), .9, .9);

        // stars
        for (
          a[i] = z = a.cloneNode(),
          s = z.getContext("2d"),
          s.fillStyle = w = s.createLinearGradient(0, 0, 0, o),
          w.addColorStop(0, h),
          w.addColorStop(1, m),
          s.fillRect(0, 0, M, o),
          s.fillStyle = "#eee", f = 1e4; f--;)
            s.fillRect( M *  Math.random(), o*Math.random(), Math.random(),  80>e && Math.random() );


        // clouds
        for (
          f = 1e4; f--;)
            s.globalAlpha = g * b[i] * (1 - f / 1e4),
            s.drawImage(Z, 30 * Math.random() * o / b[i] - 20 * o / 2, f / 1e4 * o / 2  - o / 20, o / 2 + Math.random() * o / 2 * (1 - f / 1e4), Math.random() * o / 2 * (1 - f / 1e4)  / 4);

        if (i) {
          // trees
          for (
            z.width = M,
            I = o / 2 + i * o / 20,
            6 ^ i || (I = o),
            x = M; 0 < (x -= .2 / S );)
              W = o/80 * (N(x / 50) + 5 * N(x / 200) + 10 * N(x / 400)),
              N(x / 300) + g/2 < Math.random()
              && 6 ^ i
              && s.drawImage(Z, x - Math.random()   / S, I -   W * b[i] - Math.random()  / S*3 - 3/S  , 6   / S, 30   / S);

          // snow
          for(f=n>.5&&1e4;f--;)
            l = s.fillStyle = "#eee",
            s.fillRect( M *  Math.random(), o*Math.random(), Math.random()/S, Math.random() );

          // height map
          for (
          s.lineTo(M, o),
            x = M; 0 < (x -= 5);)
              W = o/80 * (N(x / 50) + 5 * N(x / 200) + 10 * N(x / 400)),
              s.lineTo(x, I -   W * b[i] - Math.random()  / S);

          s.lineTo(0, o),
          s.fill(),

          s.globalCompositeOperation = "source-atop",
          s.globalAlpha = n,
          s.fillStyle = l,
          s.fillRect(0, 0, M, o),
          s.globalAlpha = (7-i)/9,
          s.fillStyle = w = s.createLinearGradient(0, 0, 0, o),
          w.addColorStop(0, h),
          w.addColorStop(1, m),
          s.fillRect(0, 0, M, o)
        }
      }

  // draw layers
  for (i = -1; 6 > i++;)
    c.drawImage(a[i], -t * N[i], 0),
    // reflections
    I = o / 2 - i * o / 20,
    n < .5 && b[i] > .8 && i%2 &&  (
      c.translate(0, o+I),
      c.scale(1, -1),
      c.drawImage(a, 0, 2*i * o / 20, a.width, I, 0, I, a.width, I),
      c.translate(0, o+I),
      c.scale(1, -1)
    );
    // tunnel
    c.fillRect( a.width*40-a.width*++t/10,0, a.width, o),
    t %= 400
}, 16)
