
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avatars').del()
    .then(function () {
      // Inserts seed entries
      return knex('avatars').insert([
        {name: "prince", image: 'https://i.imgur.com/tvVHIRd.gif'},
        {name: "old maid", image: 'https://i.imgur.com/Jp2tDVo.gif'},
        {name: "child", image: 'https://i.imgur.com/LLPYlYy.gif'},
        {name: "greenhair", image: 'https://i.imgur.com/IjCHPMR.gif'},
        {name: "king", image: 'https://i.imgur.com/qOhaH3N.gif'},
        {name: "ponytail", image: 'https://i.imgur.com/hYr0ubp.gif'},
        {name: "scar", image: 'https://i.imgur.com/MbedPkk.gif'},
        {name: "witch", image: 'https://i.imgur.com/Nn3jqT9.gif'},
        {name: "red dress", image: 'https://i.imgur.com/7Lo6DVR.gif'},
        {name: "spiky hair", image: 'https://i.imgur.com/tjKf08C.gif'},
        {name: "sidepart", image: 'https://i.imgur.com/WicRMcL.gif'},
        {name: "snow", image: 'https://i.imgur.com/R9azWpJ.gif'},
        {name: "wizard", image: 'https://i.imgur.com/lEpirNY.gif'},
        {name: "red hat", image: 'https://i.imgur.com/aW3mk2N.gif'},
        {name: "bandana", image: 'https://i.imgur.com/yV2GR17.gif'},
        {name: "spacebuns", image: 'https://i.imgur.com/aEcDB7Y.gif'},
        {name: "pink hair", image: 'https://i.imgur.com/ntJjVBX.gif'},
        {name: "cat", image: 'https://i.imgur.com/m0GBv9r.gif'},
        {name: "blue hat", image: 'https://i.imgur.com/xQaeISi.gif'},
        {name: "princess", image: 'https://i.imgur.com/xdMt2DS.gif'},
        {name: "elf", image: 'https://i.imgur.com/uPXoZRM.gif'},
        {name: "blue hair", image: 'https://i.imgur.com/dH9WbHo.gif'}
      ]);
    });
};
