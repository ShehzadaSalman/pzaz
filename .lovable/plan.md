

## Integrate Microsoft Clarity

Microsoft Clarity is a free user behavior analytics tool that provides heatmaps, session recordings, and insights. Integration is straightforward -- it requires adding a small tracking script to your site.

### What I need from you

1. **Your Clarity Project ID** -- Sign up or log in at [clarity.microsoft.com](https://clarity.microsoft.com), create a new project for your website, and copy the **Project ID** (a short alphanumeric string like `abc123xyz`). You'll find it in the Clarity setup/installation instructions.

### What I'll do

1. **Add the Clarity tracking script** to `index.html` in the `<head>` section. This is a lightweight, non-blocking script that loads asynchronously and won't impact page performance.

2. **No dependencies needed** -- Clarity is loaded via a standard inline script tag, no npm packages required.

### Technical details

The script will look like this (with your actual project ID):

```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","YOUR_PROJECT_ID");
</script>
```

Once you share the Project ID, I'll add it right away.

