exports.seed = (knex, Promise) => {

  return knex('poses').del()
    .then(function () {

  return knex('poses').insert([
    {id: 1, name: 'Popping Barrel Rolls', type: 'Pops', difficulty: 'Difficult', numPpl: '2', image: 'https://i.ytimg.com/vi/-M9GAz1bQ4w/maxresdefault.jpg'},
    {id: 2, name: 'Star', type: 'L-Base', difficulty: 'Beginner', numPpl: '2', image: 'https://i1.wp.com/www.acropedia.org/wp-content/uploads/2013/02/DSC_3552.jpg?w=1036&h=540&crop&ssl=1'},
    {id: 3, name: 'Reverse Flag', type: 'CounterBalance', difficulty: 'Difficult', numPpl: '2', image: 'https://i0.wp.com/www.acropedia.org/wp-content/uploads/2016/07/DSC_6744.jpg?w=1036&h=1182&crop&ssl=1'},
    {id: 4, name: '3-Headed Dragon', type: 'Standing', difficulty: 'Intermediate', numPpl: '3', image: 'https://i2.wp.com/www.acropedia.org/wp-content/uploads/2016/03/Dragon.jpg?w=1036&h=1555&crop&ssl=1'},
    {id: 5, name: 'Front Plank', type: 'L-Base', difficulty: 'Beginner', numPpl: '2', image: 'https://i1.wp.com/www.acropedia.org/wp-content/uploads/2013/06/bird-acro-1114.jpg?w=600&ssl=1'},
    {id: 6, name: 'The Reverse Four-Person Flow', type: 'WashingMachine', difficulty: 'Intermediate', numPpl: '4+', image: '<iframe width="854" height="480" src="https://www.youtube.com/embed/_qXgaEA667E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'},
    {id: 7, name: 'Hand-to-Hand', type: 'L-Base', difficulty: 'Very Difficult', numPpl: '2', image: 'https://i1.wp.com/www.acropedia.org/wp-content/uploads/2015/09/h2h-josh-wari.jpg?w=518&h=345&crop&ssl=1'},
  ])
})
}
