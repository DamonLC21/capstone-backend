
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('avatars').del()
    .then(function () {
      // Inserts seed entries
      return knex('avatars').insert([
        {name: "prince", image: 'https://i.imgur.com/tvVHIRd.gifv'},
        {name: "old maid", image: 'https://i.imgur.com/Jp2tDVo.gifv'},
        {name: "child", image: 'https://i.imgur.com/LLPYlYy.gifv'},
        {name: "greenhair", image: 'https://i.imgur.com/IjCHPMR.gifv'},
        {name: "king", image: 'https://i.imgur.com/qOhaH3N.gifv'},
        {name: "ponytail", image: 'https://i.imgur.com/hYr0ubp.gifv'},
        {name: "scar", image: 'https://i.imgur.com/MbedPkk.gifv'},
        {name: "witch", image: 'https://i.imgur.com/Nn3jqT9.gifv'},
        {name: "red dress", image: 'https://i.imgur.com/7Lo6DVR.gifv'},
        {name: "spiky hair", image: 'https://i.imgur.com/tjKf08C.gifv'},
        {name: "sidepart", image: 'https://i.imgur.com/WicRMcL.gifv'},
        {name: "snow", image: 'https://i.imgur.com/R9azWpJ.gifv'},
        {name: "wizard", image: 'https://i.imgur.com/lEpirNY.gifv'},
        {name: "red hat", image: 'https://i.imgur.com/aW3mk2N.gifv'},
        {name: "bandana", image: 'https://i.imgur.com/yV2GR17.gifv'},
        {name: "spacebuns", image: 'https://i.imgur.com/aEcDB7Y.gifv'},
        {name: "pink hair", image: 'https://i.imgur.com/ntJjVBX.gifv'},
        {name: "cat", image: 'https://i.imgur.com/m0GBv9r.gifv'},
        {name: "blue hat", image: 'https://i.imgur.com/xQaeISi.gifv'},
        {name: "princess", image: 'https://i.imgur.com/xdMt2DS.gifv'},
        {name: "elf", image: 'https://i.imgur.com/uPXoZRM.gifv'},
        {name: "blue hair", image: 'https://i.imgur.com/dH9WbHo.gifv'}
      ]);
    });
};
