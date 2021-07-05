var imageViewer = {
    init: function () {
        var that = this;
        $(function () {
            $("#btn-change").click(that._changeImage.bind(that));
            that._changeImage();
        });
    },
    _intervalId: null,
    _changeImage: function () {
        var result = Math.floor(Math.random() * this._images.length);
        var info = this._images[result];
        $("img").attr({
            src: "images/" + info.file,
            alt: info.name,
            title: info.name
        })
    },
    _images: [{
        name: "국화",
        file: "Chrysanthemum.jpg"
    }, {
        name: "사막",
        file: "Desert.jpg"
    }, {
        name: "수국",
        file: "Hydrangeas.jpg"
    }, {
        name: "해파리",
        file: "Jellyfish.jpg"
    }, {
        name: "코알라",
        file: "Koala.jpg"
    }, {
        name: "등대",
        file: "Lighthouse.jpg"
    }, {
        name: "펭귄",
        file: "Penguins.jpg"
    }, {
        name: "툴립",
        file: "Tulips.jpg"
    }
    ]
}