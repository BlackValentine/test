# How to get started

1. Create your account on Codepen.io, using your @solislab.com email address.
2. Fork a [Codepen template](https://codepen.io/garyc40/pen/YzKLKdJ) and update with your code

# Create a Merge Request

**1. Clone this repository**

```
git clone git@gitlab.com:solislab/training-review.git
```

**2. Setup node 8**

```
nvm use 8
```

**3. Install dependencies**

```
npm i
```

**4. Copy your code from Codepen to this repository**

```
HTML => index.html
CSS (postCSS) => main.pcss
Javascript (Babel) => scripts.js
```

If you are using any third party, such like `Flickity`, let's add using `<script></script>` or `<link rel="stylesheet">` in `index.html`

**5. Run a local test**

You can test your code matching coding convention using `npm run test` command.

**6. Commit**

You should commit to branch `bugfix/<practice-name>/<mmdd>-<name>`, for example: `bugfix/select-field/0928-khoi`.

**7. Create a Merge Request**

[Create your merge request](https://gitlab.com/solislab/training-review/merge_requests), with **Description** has your Codepen's preview URL.

Have fun!