$(document).ready(function () {

    laadBlogartikelen();

});


function laadBlogartikelen() {

    $.ajax({

        url: "data/blogartikelen.html",

        type: "GET",

        success: function (data) {

            let artikelen = $(data).filter(".blog-item");

            $("#blogartikelen").empty();

            artikelen.slice(0, 3).each(function () {

                let artikel = $(this);

                let id = artikel.data("id");
                let titel = artikel.find("h3").text();
                let datum = artikel.find(".blog-date").text();

                let tekst = artikel.find("p")
                    .not(".blog-date")
                    .first()
                    .text();

                let blogKaart = `
                    <article class="blog-card">
                        <h3>${titel}</h3>

                        <p class="blog-date">
                            ${datum}
                        </p>

                        <p>
                            ${tekst}
                        </p>

                        <a href="blog-detail.html?id=${id}"
                            class="blog-button">
                            Lees verder
                        </a>
                    </article>
                `;

                $("#blogartikelen").append(blogKaart);

            });


            $(".blog-card").hide();

            $(".blog-card").each(function (index) {

                $(this)
                    .delay(index * 250)
                    .fadeIn(500);

            });

        },

        error: function () {

            $("#blogartikelen").html(
                "<p>De blogartikelen konden niet worden geladen.</p>"
            );

        }

    });

}