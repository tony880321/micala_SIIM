const loding_template = `<img src="../images/loading.gif"></div>`
const nodata_template = `<h3>No data<h3/>`;

let app = new Vue({
    el: '#app',
    data() {
        return {
            search_text: ""
        }
    },
    created: function () {
    },
    computed: {
    },
    methods: {
        search_resource() {
            if (location.hostname.includes('github.io')) {
                document.location.href = `/${config.github_repository_name}/public/html/ESreportContent.html?_text=${this.search_text}`;
            } else {
                document.location.href = `/public/html/ESreportContent.html?_text=${this.search_text}`;
            }
        }
    },
    async mounted() {
        try {

        } catch (e) {
            console.log(e);
        }
    }
})
