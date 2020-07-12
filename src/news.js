/**
 * Fetch News
 */

export async function getCategoryPosts(category_id) {
    const base_url = `https://bakisamachar.com/wp-json/wp/v2/posts/?categories=${category_id}&_fields=id,guid,date,yoast_head,title,content.rendered,_links.wp:featuredmedia&orderBy=date&per_page=50&_embed=wp:featuredmedia`

    const home_url = "https://bakisamachar.com/wp-json/wp/v2/posts?_fields=id,guid,date,yoast_head,title,content.rendered,_links.wp:featuredmedia&orderBy=date&per_page=50&_embed=wp:featuredmedia"
    if (category_id == 0) {
        url = home_url
    }else{
        url = base_url
    }
    let result = await fetch(url).then(response => response.json());
    return result;
}
