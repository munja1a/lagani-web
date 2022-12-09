jQuery(document).ready(function() {
    jQuery("p.return-to-shop a.button.wc-backward").each(function() {
        jQuery(this).text(wcj_cart_customization.return_to_shop_button_text);
    });
});