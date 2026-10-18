import re
import os

files = ['products.html', 'about.html', 'blog.html', 'contact.html', 'index.html']

head_replacement = '''    <link href="https://beddy-store-newdemo.myshopify.com/cdn/shop/t/4/assets/main.min.css?v=5238938224817121111754921591" rel="stylesheet" type="text/css" media="all" />
    <link href="https://beddy-store-newdemo.myshopify.com/cdn/shop/t/4/assets/xo-webcomponents.css?v=80184209956412400661735272834" rel="stylesheet" type="text/css" media="all" />

  <link
    href='https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap'
    rel='stylesheet'
  >

  <link
    href='https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap'
    rel='stylesheet'
  >

  <link
    href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap'
    rel='stylesheet'
  >

    <script>
      document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
    </script>
    <script src='https://beddy-store-newdemo.myshopify.com/cdn/shop/t/4/assets/xo-webcomponents.min.js?v=176234521252635236151754921591' defer></script>
    <script src='https://beddy-store-newdemo.myshopify.com/cdn/shop/t/4/assets/vendors.js?v=47963513110235944691754921590' defer></script>
    <script src='https://beddy-store-newdemo.myshopify.com/cdn/shop/t/4/assets/main.js?v=98450758526692109561754921590' defer></script>
<script>
  window.Shopify = window.Shopify || { routes: { root: './' }, currency: { active: 'INR', rate: '1.0' } };
</script>
</head>'''

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Restore head in the 4 sub-pages
    if fpath != 'index.html':
        # Find where fonts or Shopify script appears before </head>
        target_sub = '''  <link
    href='https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap'
    rel='stylesheet'
  >



  <link
    href='https://fonts.googleapis.com/css2?family=Jost:wght@400&display=swap'
    rel='stylesheet'
  >



  
<script>
  window.Shopify = window.Shopify || { routes: { root: './' }, currency: { active: 'INR', rate: '1.0' } };
</script>
</head>'''
        if target_sub in content:
            content = content.replace(target_sub, head_replacement)
            print(f"Restored CSS and JS in <head> for {fpath}")
        else:
            print(f"WARNING: target_sub not found in {fpath}")

    # 2. Remove Liquid error string
    content = content.replace('Liquid error (snippets/button line 92): Unknown operator !=nil', '')

    # 3. Replace href='/' with href='index.html'
    content = content.replace("href='/'", "href='index.html'")
    content = content.replace('href="/"', 'href="index.html"')

    # 4. Replace /collections with products.html
    content = content.replace("href='/collections'", "href='products.html'")
    content = content.replace('href="/collections"', 'href="products.html"')

    # 5. Replace /account/login with contact.html
    content = content.replace("href='/account/login'", "href='contact.html'")
    content = content.replace('href="/account/login"', 'href="contact.html"')

    # 6. Replace /products/example-... demo links
    content = re.sub(r"href=['\"]/products/[^'\"]+['\"]", "href='products.html'", content)

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Processed {fpath} successfully")

# Create redirect directories for extensionless paths
redirect_targets = {
    'about': 'about.html',
    'products': 'products.html',
    'blog': 'blog.html',
    'contact': 'contact.html',
}

for folder, target_file in redirect_targets.items():
    os.makedirs(folder, exist_ok=True)
    index_path = os.path.join(folder, 'index.html')
    title = folder.replace('-', ' ').title()
    redirect_html = f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=../{target_file}">
  <title>2M Care Matress | {title}</title>
  <script>window.location.replace("../{target_file}");</script>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center; padding-top: 50px;">
  <p>Loading {title}... <a href="../{target_file}">Click here if not redirected</a></p>
</body>
</html>
'''
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(redirect_html)
    print(f"Created redirect bundle: {index_path} -> ../{target_file}")

# Create 404.html for GitHub Pages routing
not_found_html = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>2M Care Matress</title>
  <script>
    (function() {
      var path = window.location.pathname.toLowerCase();
      if (path.indexOf('about') !== -1) {
        window.location.replace('about.html');
      } else if (path.indexOf('product') !== -1 || path.indexOf('collection') !== -1) {
        window.location.replace('products.html');
      } else if (path.indexOf('blog') !== -1) {
        window.location.replace('blog.html');
      } else if (path.indexOf('contact') !== -1 || path.indexOf('faq') !== -1) {
        window.location.replace('contact.html');
      } else {
        window.location.replace('index.html');
      }
    })();
  </script>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; text-align: center; padding-top: 50px;">
  <h2>Redirecting to 2M Care Matress...</h2>
  <p><a href="index.html">Click here to return to the Home page</a></p>
</body>
</html>
'''
with open('404.html', 'w', encoding='utf-8') as f:
    f.write(not_found_html)
print("Created 404.html for GitHub Pages")
