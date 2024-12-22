// Movie
const movie = `
<div class="hidden">
<img src="{poster_image}"/> 
<p class="themoviedb-synopsis"></p>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Movie

-->

<!-- VINCULO DE REDIFUCIÓN - TRAILER

http://c.co/data
{duration: "{runtime}", quality: "HD", cat: "Movie", cover: "{backdrop_image}"}
https://www.youtube.com/embed/{trailer_id}

-->

<!-- Información para la api de películas themoviedb e feed do blogger -->
<div class='cv-obj'
data-themoviedb-category="Movie"
data-themoviedb-genres="{genres}"
data-themoviedb-id="{content}"
data-themoviedb-type="movie"
data-themoviedb-quality="HD"
data-themoviedb-duration="{runtime}"
data-themoviedb-cover="{backdrop_image}"></div>
<!-- Lista de servidores -->
<script>
{server}{download}
</script>
<!-- Agrega código  adicional en la siguiente línea -->
`;

// Serie
const serie = `

<div class="hidden">
<img src="{poster_image}"/>
<p class="themoviedb-synopsis"></p>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Serie

-->

<!-- VINCULO DE REDIFUCIÓN - TRAILER

http://c.co/data
{duration: "{runtime}", quality: "HD", cat: "Serie", cover: "{backdrop_image}"}
https://www.youtube.com/embed/{trailer_id}

-->

<!-- información para la api de themoviedb -->
<div class='cv-obj'
data-season="1"
data-serie-url=""    
data-themoviedb-category="Serie"
data-themoviedb-genres="{genres}"
data-themoviedb-id="{content}"
data-themoviedb-type="tv"
data-themoviedb-quality="HD"
data-themoviedb-duration="{runtime}"
data-themoviedb-cover="{backdrop_image}"></div>
<script>
    // Obtén la URL de la página actual
    let currentUrl = window.location.href;
    // Selecciona el elemento <div> con la clase "cv-eps-id mb-8"
    let targetDiv1 = document.querySelector('.cv-obj');
    // Inserta la URL en el atributo data-serie-url-s del <div>
    if (targetDiv1) {
        targetDiv1.setAttribute('data-serie-url', currentUrl);
    }
</script>
{download}

<!-- Agrega código  adicional en la siguiente línea -->
<div class="cv-eps-id" expr:data-current-id="data:post.id" data-eps-results="13" expr:data-home="blog.homepageUrl" data-id="id-COLOCAR_ID_POST"></div>
`;

// Episode
const episode = `
<div class="hidden">
<img src="{episode_image}"/>
</div>

<!-- TITULO - GENEROS

{title}
{genres},Episodio
id-___ID_DEL_POST___

-->

<!-- VINCULO DE REDIFUCIÓN

http://c.co/chapter
{name: "{title}", season: "{season}", chapter: "{episode}", duration: "Episodio {episode}", quality: "Temporada {season}", cat: "Episodio", cover: "{episode_image}"}

-->

<!-- información para la api de themoviedb -->
<div class="cv-obj"
data-title-serie="{title}"
data-name="{title} {season}x{episode}"
data-serie-url="{serie_url}"
data-season="{season}"
data-chapter="{episode}"
data-themoviedb-id="{content}"
data-themoviedb-type="tv"
data-themoviedb-quality="HD"
data-themoviedb-duration="COLOCAR_DURACION_DEL_EPISODIO"
data-themoviedb-backdrop="{episode_image}"
data-themoviedb-category="Episodio"></div>

{server}{download}
<div class="cv-eps-id" expr:data-current-id="data:post.id" data-eps-results="13" expr:data-home="blog.homepageUrl" data-id="id-COLOCAR_ID_POST_SERIE"></div>`;
// 
window['template'] = {
    movie,
    serie,
    episode
}