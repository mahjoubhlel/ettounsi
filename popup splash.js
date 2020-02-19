<script>
    $(document).ready(function($) {
        $(&#39;.cb_splash_ads .close&#39;).click(function(event) {
            event.preventDefault();
            $(&#39;.cb_splash_ads&#39;).slideUp(&#39;slow&#39;);
        });
    });

    $(window).load(function(){
        setTimeout(function(){
            $(&#39;.cb_splash_ads&#39;).slideUp(&#39;slow&#39;);
        },3000);
    });

</script>