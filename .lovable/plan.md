

## Integrate Microsoft Clarity

Adding the Microsoft Clarity tracking script to your website using the Project ID `jxj1f4ixqk`.

### What will change

**File: `index.html`** -- Add the Clarity tracking script inside the `<head>` section, right before the closing `</head>` tag. The script is lightweight, loads asynchronously, and won't affect page performance.

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","jxj1f4ixqk");
</script>
```

### Summary

- Single file change (`index.html`)
- No new dependencies
- No impact on page load speed (async loading)
- Clarity will automatically start capturing heatmaps, session recordings, and user insights across all pages

