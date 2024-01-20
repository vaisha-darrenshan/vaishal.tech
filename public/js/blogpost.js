var db = firebase.firestore();

db.collection("blogPosts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        var data = doc.data();
        var blogPostHtml = `
            <div class="slick-slide-in">
              <div class="st-post-single st-style1">
                <a class="st-post-thumb st-zoom" href="/blog-details">
                  <img src="${data.imageUrl}" class="st-zoom-in" alt="blog1">
                </a>
                <div class="st-post-info">
                  <div class="st-post-date">
                    By:
                    <a href="#" class="st-post-author">${data.author}</a>
                    <span class="st-post-date-divider">|</span>
                    <span class="st-post-publish-date">${data.publishDate}</span>
                  </div>
                  <h4 class="st-post-title"><a href="/blog-details">${data.title}</a></h4>
                </div>
              </div>
            </div>
        `;
        document.querySelector('.slick-wrapper').innerHTML += blogPostHtml;
    });
});
