import { useState, useEffect } from "react";

const CONTACT = {
  name: "Patrick Veenhoff",
  title: "Founder & Principal",
  company: "apexdynamics.io LLC",
  slogan: "software for owners",
  email: "patrick.veenhoff@apexdynamics.io",
  website: "https://apexdynamics.io",
  linkedin: "https://www.linkedin.com/in/patrickveenhoff",
  phone: "+41 79 565 05 89",
  phoneRaw: "+41795650589",
  location: "Gersau, Switzerland",
};

const PHOTO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCAEAAQADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0yGwVWyeKg1W2YQMQSOO1bEmMDiq19GZIGCjnFfU8isfArFy9rZvQ5HSPFa6XfNBIxHf5q6PUfHltLZn94vA9a54eEGv74SvwRz0rF8beG3stOZklIKnOK+DxOWyjiJV0ran3uFxFOpTjC9zjfFHiGbWdUmt4C3lMwBYdK1dD0m1hX5IQWHVjVvRPDkJ09ZWwWbkk9a1LfTI4S8e4qnY1nrPSO56NuVanQaBonmxoCcbucdhXSLoscK8FSR3PauW0bXGtHEL4O3ge9bEutvcLtUbc/rXqZZh9eaR5mOqtKyK2u3y2URwRx1qHSrwTxhwQAwzV7+x/7QUGRcg+tTxaNDCQgUDHfFfT04uL5kfLVqqqLkluQHpkHJ9Kzb1JpCcAY9K3pbIRIDnn6VV3IzYI/HFbexjUMfrc6GljGgLwLjaR+FW7aV2lGUx6nFaJtFdegPvUX2YK/AwRUKg46X0NljoVFdLUmNmlxGcc1i32itG2+LhvaujgRxHxgVVuJtpIcUVoRlG0iMLUnGpeJhpbXBUqSwHv3qxb2QHO78DV2SZeAvWqyLMznj6VxUo+zldK57FaXtIcrdhzxbeMYpm3irZi2qNxqFgOcCvbw1ZSR8nmWGcHzXM6dMNUW2rUy81Fs9a9KMtD5epTu2yLbRsqTbRtquYx5BFWpAtIFqVVqWy0hUXNF0wjhbPFLK4hTcTXL654jVQ0MZ3NjoK8nMsesLTc2e/k+VvFVLM7rwAy3F0zDnBxXVeKY8WZIXPrXJfCkGWFZGGGbrXfeIrMSWTDOBivybGTq4mtKVP4pH67BU8PQjCWyRwdtFCXDMMmtC9jQ2nAC8VnT2scA4c5HfNVXuXuHEAdjx615+J4bx8XFzV7nHQzTDVL8j2OkidCo3HmrCxxy9xWTqcZiX5CQfaqVvqNzCcOCQO9fqVXHKE7M+YpZQqkFNbnVxpFAm7AzXKeL9LOrRNGQQh5OK1bfUBcsEL/AHqvaosUent0Lbetc9XEUqiaZ14fB1aL5keQ6XJM0ktko4gbYTWjHpOpSqdy4T+E+tU/Dzxw65eQyHIecsK9LkktorNTxwteNQdKD16nv1nUktOhxUfhu4KkgsJfUVoadaT2QUzIz88muo0qRLqQyHGw9K1W022lgxwDXr0YRSujycRWd+Vox4LzemFAUY6UeaQCxwfxrP1oHTnLIhOOwqpb3E10hILAnse1TWx7pyUbEUcvhUi5o2DM0+BharzWoBzT9OQoo8wktViQfN1AzXr4TERqRufOZrhKlKVlqiqhKLtIJpiozy7j2q75aEYBGacIgORiupuL1OKk6kY2BZAsfIrKvB5pO1c5qtrPibTdKZlnuApU4IAJ5qo3xB8O2Vok8ks0zv8A8s44/mH1zWNXkacWzswvt4SVRK5ZWGVHAK5FXlYqv3RXKat8WdKsbMzvps8RI3Ijuu4j1IGcVz2n/HrTLg7bjSZlXOC8coOB9CP61jSlTp+7c7sQ8TU99QPRJ5XcYC8VAitu2k9aq6P4r0fxDuFjcHzF5MbjDD/H8K0toBzXpUIxSvE8TGV5TfLUVrDJIARiqbKO1XZGJGOagKV1Qdtzxa8oyfuogCZ60eXU23B6UYrTmOVxQxU4qQLilAxTwualyLijJ1ybybZj7Vy+iWUN48s02GYtjHpXQ+JVbyD6VjeHbCbzncZCnnFfN5thZYqShE+3yavDDUueZ6L4B22lx5Kfd6iu61/dJZYUdq47wTpri43nk12usMLa0JkOAB1NfHUJLBY1qpsj7DFR+t4NKnu0cFdRERnINUdLWNbpi+PSti9vreWAkOv1zXn2rardRXzizBY4/Cvq8TmtGUY8ru7nx+XZTWg5qeisdzqMp88E8L71FI0AhOMFj2rTvYDK4G0E1nvYbpNwyCK+bx1WcZcsOp9hhlFxvI5e91WXS5twjYr6iiXxlJexBBkZHrWnrtgixHeoPvXnOr3kGmO4LYU9/SuTD1pK8banZKMZWLUNyIdeickASSevWvRo421CLYp4IrwS2119R1WNoNzpA+d2OPpXtnhTWoQimRucdCa2VLnmrhKXJBtHWWWnm0tkQAgirUQkU7i1Zt94kVkVYQGf0FVRqF9OpCREHvmvdpVoJWl0PCr0Zyd4Gtf2sUsRZsMT61zjkW0rBMbakuJL4x4bcPaucvNXNvI8T58yssbPmimloa4Gm4tpvU6AaukKkZH1qazvGuznlqwdAs11GQTSMWBPQ12b2cGn2jTkqiRruY+gFebhadZtyhOx3Yp0rcs43GrbOy54Fcn4o8XtpLmysV866IO4jpHzjn3rkfFHxWu57p7fRyyW8eQZOCWP+e1aXhnRpUsxqOprvvbj95tbnZnnn3r16NerCN5yOL6hSqySjE5ybTb7U5fMeOZ93Uv/AJ9R+tSnw3LvRpFaNQdxGOvH/wBau7AY4yo/Kn7VIw4qHi/M9KOWo8Y8XaFeX8zLErOGAzj0/wA/yrkX8O3dmxDxyBQpPT2z/n6V9IHT7XdvMIP4VUvfD1jegrJEoBqfrKbuy3lzS0PFdN+36fMrwySRMH8wOvBXnBxj8/xr1/w/4xElukWpcOB/rAv3gOOffNU38CQK++3l5HKg9jVa50u5sJI5LiPaqggSKOMk134fGuDujxMwyaNePLUWvc7/AOV1DKQynkEd6QrWX4RupLvTZEk5EMmxW9QRkD8K2ilfRUqqnFSXU/NMXhpUKsqUuhWK4pNtTMmKYQa3TOVoaBUkfWmgcU9V560myoJ30MzXLfzITxVDTbmK1XaSBgc1s322QbSazh4bWcGVyQD2zXl1a1p8tNXZ9NQp3oqVZ2R13gbV47i5AjOVBxkV2HigrNpsi8crXAeELVNJmbZgDOQK6XX9SZrUIpyzDoK/PMwjUli5wnuz9EwPs/q0J09kjy68E9rbSSbJCq56VzFl4hjN2fOR1UHrtr0G9liMeJpEXbwQTVnQPC9pcxmbyUIfnpVZVgXKs43s0c2PxcaVLntubB1KL5WchWz0NJb6jFPIyEjGeDUOsaH58mBKVzycVhaq0WhWT3CMfk5O49awp4iVd+1XQ7HCMFyF7xbdRw2Lssgzt7189a9cy65qzQQySGHODt6Z+tdhr3iLUfFQNvajyICdry5ySPQVt6F4UjFulrbQh3C5yBXdOvFRu1qFKk7mJ4T8LQJFHtQL5Y79zXRzQmOQKjbDnAxxU15b3GhYW4gaPI+U44NZMGmatrt2s0DeVEjdTzn6CqoPnfu6hWfKve0R6F4Z023VCZGJk9WNdPNdWcMfGAQOcVx1lYX8ZUPIVYcZHFdBFYM8A8w5Peu+NVpODRwThFyUosgvdVgaP5SAB3rn4dPivZmuXi3EnuO1bLaGbiY8nYOwq+mjrZlXDEZ7VnSqtfxHsaTgre4Y1pbi1uUWNfKjzk4qf4hXJj8C6o8LkP5GAc88kA/zq9PAiqWVgTXEfEe4u38NS2iPt+0SxwjnHU5/pXJSzCLrezj1N5Yb3Ly6HDeBdMhvp7ctCWjjbJyON2c/nXqxUMeOMD8KwvC+jjS9PhQKu5UJyOhroYl/d/N1/lXXiqnRHfgaaSuyLYOp5qVYEPU4+lNYg8Ufd6Z6VxXZ6asKyqBgHg8c0nlALjp/WgMMgnnJoaYEkc+lFwI9jBgVxVn7NHdQtDcRh45BtZT6URrk8VZTkdK6aFaUJeRhXpKcTy+C71jwjrd3pUDiWOKXeiOn+sRuhB78cV6naZurOGcrtMiBiPQkdK5nxZpytr2mXKoC0oEL/wDfQx/Ou3LIihQOnFe9h8wVJ8knofAZxkyry5oLXr5ma8RHaoXQKMmtcojCqk9sG6V7FHGU57M+RxGV1aT1Rls5JwKkXO01L9lw3PSpBHxjFdN7nDfkdkZphd7gHHFapG2LGOgpY4BnOKtCHIrFxjF3R0PETmkm9DmpdVNlOXbIQGrCeI1vCTtZgowCRUWt6R9tmigBKqzjcRXYJ4OhTTMIgBC5r4rMqUKWN9o9bn6RlFZ1sAorS2h5N4v1SO0hD5AZmrp/C3jK0OnReXKpIUAjPevLPirpOrpK8sW7yY22gD19a6/4R/D9YLWO6v5WkmkG4gnhfauvDJxxDklZNHLjpRlhrS3TOq1TxPID/o8bSy9gozmuQ8T6P4n8R26/aDHZWgO4x4Jd/qe1dfoJtbaTfIyk7v4qs+K/FWm21uYY2WWdxtSNO5rwMLCnCGnU9yvN81kjyizR7Y/YoYC8q8bFrufhvc3GnXdxHqyLCZCDEx6EelT+DPCDNO97eMPMnOSB/D7Vv63oEbQ+UgB7hvSvMxuIlz+yt7vc6qU09UQ+Mli1mBLSJlZtwOauaLoa2Vqke3aQPSsqztfsewyg/KRk119tfwzQjGDxXuZPVoUoNRep5+ZQqVLLoNit45hgoMjvVk2BKjYO1RwOqvkH5TV4XSMvynbXuwUKsbnh1XUoySRmqVtGJwM96gursXHyjAz6VZv0R+M4461yl1dyWczlVLAdDXzmYYVp+4z3cJVcopyNSK2G/aSevOa53x5bxzHTLOJN7vOZWCjOFUY/rVz+3PJt3uJmG0DJxXP6pcXWvRQ3lrMYYFBEjwSHLrnhc+mev0rzcHhZ066qS6Hpxpyqx0Xu9WatrMjxokLRsFznac9MjAxXTxeD76fT/wC0Lq8s7C1MYlaSYnKLjOWHAH51wuiWErL5q3FwCG+TMh4x3/OpNd8Uapf/AGjSE8658lIzIrPxM3JUn2GPxI9q9GVWt7aN4px667efnrp8zqqwjGCVJ2v3IG1zToRMLrW7aB1J8spDLMjc92RDj681p6ORrdk1xpmraTqUq/etbe5xOB6hHCk/TrXn11F4yZgRBaRx5+YIAxx+OMf55rIkubuC5hF9HFJIyZceWF2N6A+telUqKcfgS9Lnn0IVaU9asn6pW/BI9YtL63u4vOQ5HTFOe4giXdI6qM9c1ytvqr3Jto4LB3cQKGbeECqAAAfU/wCFQarrFh5MxvYr21ktm2yxvJtAyMjkZJBB4wea8WlXxEqns50JL7n+u3metXxmFp0Pbxqpq9lvq72ttvfSx28WrWRJjFxEz/3Qw3flV61mSRspyPWvIZfEek6tY22mwR2GkpbszfaIrcLNMWOfnZiSfbNdx4D1WHSJXW/jGrWjhUZ42KTQY/iA7+44zXrLlSV9zl9spU3Lr2Olv7ZZ9X0tiDhG3fkCau3cyhuuMVy+m+OrW/uIxdRfZpYpmgzyQ7ENtx3HHXP51c1i5mRsopPsKuTlJ2gr23PDrzipXk7X2NOW9ZI/kyafZXDyD5xWDYXM1wwWRGQe9dFa27IgJHFdOGp81Ra2Z5uMqKNN6XRJIobpTRHU3BNPVRX1alZWPz6tFObZGiVIziNCTThgDNZ1/MzKypUt3FCF3YrRXSXWrRwqcsDnFejCRlsQcfw4ryLQLKa215rqVyQ5GAe1eyWqJcWRGRnFfD5jKc8a0fqGVwjSwEbHlHjDTobxHt2UFpXHFXdIt7zTLINFCXVF7U/xZbtb6nbMvIMoB9hmvQNNtLY6auFU5XmtYe1eJtJ2sjKTprDNpXuz4r1nxf4pu7n9zBLZr6dc/jW38N9O1G81xbvVJpJSvIDtmvYbrwXZT3ReSFCD2A71Zg8LWtlIrwQhSOhArg9rBaRSPRvfVnR6V5UVqqheccYqK/uJYzuZcp61oadpkjKuVOMdu1S6lo5ht8mQEH1rpeAp14XaszheIdKehzTXcdwpULkd8CqsNwbWZtjEL6Gt+3jihUhFUDHOK4zxHqccE7BSF+leTisDKilyM9PD4lVG1JGrN4jWNlj3gZOOtdRpM8dzFmRuMZFeEalq0lxKfmxt+72rovDnjO4tIRFcEyKOjdxXfg8TKnDlqM5sVh1N3ij0XV7srcxwhvkJ6j0qW4trdoMnG3HJrgL7xYJZ0cZAHeppPEj3UYh8zCH0NcMsVW9tzLY1jh0oJdS74m0+OHQLuWP7pGOPeorSBLTTLSxZo42eEoEJ5dyNx/LmpZ76O70cwO24blOD3waqWkZm1q7knDEwx/ueOMN1I/ID8a6XJ1JqR72Ajy4WUH3/AEN6wt0it9iHhRwayNUgjsy9zK2FKYchSTgHI+vU1u2vywheOCzNj61FdmFkIkUEEcg9q1jPlldnPWw6rpRTs000+zX9WfdGBbt5sStFOssJ5B4aud8V/wBlWlnJc3MJmkyAkUa5ZmJwBgcnmtPUtC06Ji9vPdwFufLt5OCfoc1FpXh+JJTcoJDImQJZ5NzLnrjPAP0r0FLCpXTfpZL8b/oYuhjZ6NRXndv8LL89PMl0WLzolmks1tJ5FXMQ5KY6An1x1+tY3jnw/cax4iWxcj7Jd26yITxukj6qSPYg12cdrBGdqyfMo5Nak/mwWDyWpUyeUyltgfbxyMHtiufDzhSXLF6WOnHYT2tOKsm00/mjza08B2iKTdQB2JyxHcjHUfgPyrQt9Baxuxc2M8hBG1oWPb2/zite0vS6RpclIpGwCzA7D7hgMYrQ/sg3tvJHbXkYllUqJY1J8rtkE4ya5vrcKjUbvts/8iZUPZOzWpBZaRYwf2OwuLWM3skt9dPKm8soOyNFzwCxUkn0U+tdZdWccjFgoJbmuE8aWR8P6DYQabI8PlFLdTuyxVSSAT9Sa72zlL2aGQ5fYM/XFenlSo0J1IwW7u31f/DHzOd5bLlhXvrK6+4z1tI45wrjFbUQjWHgjpWDd7/N3oC3rT4pZyNvIzW7rNVXNI4lQvS9nJmoQGPHSnhccU2zt5No3c5q15HNe3h8Q6kLyPlMwwipTtHUz72YQxHtWdp5+2Fj1Famo2LTxlRnmjR9K+zRkEda3lI5aUEkYers1pdwCNSSWHSuxstVmtbIF1ONvWue1dFj1CDeM5YV2CWkcumAYBytfE5xUcMXzRP0XJIqWCUZeZ5Jr/ju3vvE8OmQEvKjjfxwK66bxVcabprFFaTC8Ada87fR4k+Isq4AOdxr0K4tLdLNiMZ2964auKnOrGd7M7qeGhCjKFrrUuXym2dQE75qWGXdMrPt24q/rlujMzKcn0rLWJd6DPQZqa2FlGrdbFUpxlDU6nT71Y4gDt+neptUjF3bnauBjrWRZKpKbsnBrVv9ShtbJtzDAHSvQoYmSXK2ctXDRbukcvJoOBIrs/Iz96uA8Q2SrHJuXLKcA11s3iw3U8gDAKvA9a5y8aNrsS3EmVLZAPSs6uKppW3ZrTw8rqT0OB1DRrzPmG1lMZGSwXim2alF+R8Y6g16fqN1aRWJkaSMRhe5FeXf2lbzzzvbgEFz9CKzq0rQUkzWFfnk01sa8LRi2LAqxPUVkwebc6v5UUmF9BWRfaji7FukjKzDnBrQ0mVdOvIro5JVgWz3Fcag4XZq2dyulXVrAsxYsq4JB9K2Umh8u3ZSGKoyBupGTnp+FVW8QW13AEjYNvGMCr2nadF/ZrS+WRJGQynoetThKsr/ALw3p4lU7wetxl7etbWD4OH3bRz3yP8AGsXW9cEd0tvudS+cEDqBwTV3V1zE3ygfNkbuQSD2/L8aw/E1m8uni8iDF1TbuU+p5xXe0uY7IStG4+2vFixI6lied/UY/wAai1UQXtrJFcW4dDnKMSFYjsR3rldRtvE2kvby2dxDcWLlTIssQLxjvg98V2em6dZ6uq7NftzchWby3RQVxgDrjGc4/D2qnHl1NlWsve0M3TL02FqyRwSJDGoKxbs7fYA8itvSb66eY3jahd+XINhgYr5YyOwxxV8fDzVEmaKKWwuGK7y+5kyccrjnPNc/rd03giL7Zq9qYrVjsLR/Ptxx069TU+63puW6qtdSTRrMTaTb4Gyp52j+eK39L1FZEVlPua8+t/ElprLJcafIZEQEllBB/EHmuo06ctDbkrte5IP0AJyf5fnUu8WRKopxNDXrBNe1C1scfLHOsrE+gBP+H510z2vlRhVPGKzbTS55Ll7tc4YAAYwV9RVidZkf5ywA7V6GHhOF5tHz2ZV41XGkn8P5vcv2dgsinOM1NJYxxMBtGazodSa3XPIpTqxkbOa6JYyMNGjyPqUpyumbttCu3ipfs4J6Vm2WocAE1r28iyjg5r0qNZSjdHgY7DShPUiNqD1FOEKxoeKuhBimyw7kwK09o9jjVJHFay0b30SMed3FdnYru09R/s1xHia1+z3aXJONhrqdIvvM05DnPFfJ51J/WLvsfdZLFfVUo9zzHXLL7P47jmBwX4NdbqOh3WraTLHCTCSnDjrXB+Mb+4bxxCkSswGGwPrzXptr4ht49OUTOqYXnJrmoQhUqLm7HbWnKFN2IpL8XWRnn+dQzx4UNn5q82s/H1uigSSqD65q9L8RLPYFWXe56Bea9NVVK/McrpOOx6DbXvl7Rn5h1rN1u5uLgFQrBT3rE8N602oXO+TcF9DXQ61f29tbiR3UDIABNeBi8b7OXLFXPWw+G5leTOGvYp7MF41LEnn2qjPJJdDJzkeld4ulfaLV5nH3lJArnbLT/wB+UK87vTtW1rw52YVNJcqPKvGkV+gAVpNp4xk0mg+E9Uew80sV3c/WvSvEmixTSRRsgOW9K37fTYbbS1BQKFWoli+SKVh06F22eD3tk0F0UkBEidzW3pkEuoXltYAD96Qpf0Fct8Q/ELweLJ47fBjjADD3q34T8SH7fZSJJhvNA57c16ap80YzktDnlLdLc+h/D3wstIbRXiDh8ZDMeta76U9nA8MqYCjk+1dl4XlW70e3fAztGao+NENtpU9wg/g2H8eK9WSp8lmtDxqcKjmpX3Z5lqcDsJomGCCdo/iUD/8AXWJAj3LR2Lpu2kLxyOBnJrotZuYrmRZiCSigMM4yMEGsG3uFtLqe4EfyuBkk8KSQAOfrmvMsmz6lzsiaGxQIYJVBA4ORnNVLrRoo2JRWAI4Oa2DDIzeZuznkc8GhlkmjaQx7VAxkmizT0PRo1FKJjWhu7ckwXc0bHrgnBqd/C8N9Ar37zXccZ3pHO5ZQc56H3Jq9ZxqkpLZ+tbEaNdKQQVjx+dJ81y5uEVdpHEafp0MuuSyGLyoVXHK4Uj2robQCS5R0YKqjy4x1PXn8MmotViWO+Noh2qF2uc4A74z61LZwLazqd2W7+3+eKuNNt3Z5GIxSjF2PRtHWFLQIABgd+9Z+qsjsVROfWq9jeARg5OcVZMiOMyYHvXpKbasfOSglLnMm4hYoMKcVDFb4BcjvV+/u4bcHDLtrDGsR/NtcH2zXHieWLTZ10OaSdi5LOIWB3YxW1ouo7yATxXGTTmdslsVo6deiEr82MVNPF2qLl2Cvg1UptS3PSYWEg4qby/lrm9L1cswDHiurgKyxBh3Feuqqkro+dlg3B2Z5f8U746bpryAfxAfrUfhjxEs2kod3OMVZ+Mdks2h3HOCF3A/SvN/Cl/MLBE2E7jgV4OdxcpKSPpshSVFxfc65tPN9rL3pXqNoOKpeJ7KdrWS3icl2HRewrvtI0jNrDuXB2gmr9x4etfKdxGC2OvevlcFVlVxDk9kelVSszwLQvh8yxo06F+OSea6WPwRBCofyQuOhr0q98PJY2gkh529RWLqF3HGrKSAAOhr1ZYicZ8sjCKTV0crGRpn3WCketV5Vu9cvI3Q5jicEk9Ky9eunkJaNjw1b/hK+jNp5cuEYHOT3ow9KLqXkyqtWSjaJ3lrN5drsI521W0vTQHeUpnPes5dVjnlMET5Krya3rC/EUESblHrzXq4WnDVdDkxU5aMyLrTPOvd7IcKan1jTSNO4JQMMV0kP2Z5TL8rKazfENzFFaMGHAHGKitho812tApV5cuh8g/EfQrnTvFNxv+dZ8OrDv2p3h7w/cXd3HFa5DcHit/x1qP8AaXiaVGUKsPygGui+D1tFeeLEiOCvlnj3zXS3e0I7FKyjzvc94+FWuTjS49P1EbZ4wBuP8XvW14/1ezSxXRzKpvLvDpGOoRSCWPoOMe5pl/pFjomlyXckqxOF+Q9y3oPWvJ9LvbjVPHE97eSM7mFo13NwM4/oK6pKTg0t7M5sKk6i6K6NO8sct5uSVXtnoO9ZM1n58Q2yoRvUkZwMjtiunmh+Z1Y/K3b0rMuLc24IRCyt/FnofevLjKx9DVpp6oZFfRARq7gMAWCgAVDeTZOxXKvweeM5xVG7SaORv3iMjDOcdQOo/KqsRuI4ywuC0PIA9jz1NbJ31MoVJQ0N3TogZtqtnDBTjk59K6G6uYNKsJvPG1+AIz1f2/xrhodVvox5dqypKy5LKBuBPpir+lRy3cy/asyMhYs5OWOOo/z61rFq9zOtWlNcpZs7STUL9ru5hMVsBuYZ/Ec+gFb50+1m2yRsGQjKsD1FRwWMEVrMjIRH5bBgODgg5/SuA8LeINQ0i4ufDtz+/wDsjbYJSeWjxlT+KkfrXRB/u5VLaI8rGU/fjBPV3dj0gPHHA0YABXvWddanInDEsMVnpeXE+A5OD+taf9kM8O4nLEdK8ipWqVp2pG0KUacbzOT1nVGlyAxx6Vm2byZDAtW9qOi3AcqYflz6VLBpCwQgnk/SicKmzNY1IJaFS1mZhlia0LZRIVyTVCPabswjgV02maekm0KucVdDDzm9DOtiYwRfsYmRVJBrpdL1lo4Sj9qqxWRWNcgAVA9uEDkGvchTcUeNOrGoct8VdWM+lNGDkyME/DvVLwhoMIt4WKjCgGq3xBR2tItoz+8Ga6XwwY4dMjBIJ2jJrxczblOzPYy9KFPQ6l9St7GFckAAVkXfikLbSGM84OOOTXE67rUj69BapIfLB5+tbfk5sWLIenX3rxaWCdG8u52qaeh2M2v213A8UeN2MnNea+PLny0EkRxJ6A9RUcr3EN3InnMBGeDnmue1yea5uo4yWkDHmnBWk1N3ZFrLQztPY6jeRQzKVRn5NeijQ42sSEjCgLxxXEW+mzRPlvlI5zXrOi6TPe6TFufb8gzmlTUqkvdHK0dzjdJtp2uJMIQOhJ9aTVLyazYQKzBt2Tiu+0vQFUyLLhSDwfWuZ8aW8VrKowuR0at1VlSWgVEpO7GaTrs4RYyTgepqzqd4by3ZshiBxXDPdyRuwViPSuj8ORXmoIUeGQR/3yuAfzqKk8RUqRjC7FGNKMW2fP3xM02903xC15hglx3HTNdP8FRqtpry362Ur2xTDSjhV/GveW8A6Feql9qVlFeeU3yJMNy7vXb0P45qPUp1edYYkVIYPljjRQqr64AAFfTQoSp0057nne2VSTjHYZ4j1O4vonu7l8sqhI0H3UX0H17nvXnVhftHq906ECa3kjmGT94EEEfTGa7DW5W8jy88d686lY2vimdSMia3jIHqQWr1MkhGti1Tns01+B5mfVZ4fAOrS0lFpr5NHqUF3Hf26zRNkHqO4PoabKu5cNkj1rkbO+ms5FkhJJ6Mo43j0x6jtXTWmoRXsIlQhgwrgzbKJ4Kq4/Z6M9jIM+pZph1UWkuq7MZPYowVhyATlcdaqTaNuLElUyQCAOPY1oZOcqxHbFSLKMAH7w9a8nVHuOEWUrXRnBPloIi2Mt0rZ0/TYbFSEJYnGPaq6SsWJYk1aS5BB3HFVqL2cUP1SVbHRr+5bAK28h+p2kD9SK86lQ22p6PfyKPNeL7NMfUqMqfy3Vq+MfFCz3droNuwLTEyzeyIM4/E4rK1OTyvD6SMQWS6iPPUfNj+Rr6vLMFzZfWk+v6Hw+e5iqeaYanF97/PQ7eaxWae3ktg2x1Bb2Nd/omjRm3V3Xn6Vw2gXTNpsbqRuUZGeRXoWg+IbW+tdoTyZk4aPrz7V4GGpQg20j1sU5S0exR1bQoEZnOORnFZCeHGni3CPjPA9qk8SeJ0gvfIfKkkAAjFdPo95E9ojbhyKwr4+nGViKWGly3PPbnwtsn3CPDZx0rqdD0UQIpdccVNrV9ELg7cCqEniJbOIbmHtiuqliqKjzXsYV6NTY3bi3QIQpz7CqSaZM4OE4PWo9J1pLphv6H1rqoArICMV0RrxqK8WYRoyTscJ4j8MRy2/wA8YIxmvPJNTl0t5rSNs7OBXu+q2wms5ABztNeF3emA+IbmNuQx3VzYuEZRUjvwjlCbg2cnpj3GoeIF80sMvkmvcodGP9mKQRt2V5m+lx6dqEVyg/iAP0r1iO+RdIA5+50HevNqu53xVjyRrgi7lL85NaXhizt7ma4uJkUlCFQHsKw9VtriC8kUAj5uKr2ms3Wnzvg4JHI9a8uiuZczWp0y2NvxhPb6dJAyAAyEjaK7fw54ltW0yJSwXCivHZ5b3xBfrJJlsNtjQV6DonhtrWBTduQWG7ykPT6n/CvSwmBnN/u0cuIrwhG82dVZ+JLe5mkRG3AMeRWLr+n/ANv3AZ3MUKjAGMsff2q1FBFBGEijRF9FGKkx717tLJ6Mf4ru/wADyqmPqS+BWRS0zw3ptiQUi3uP+Wj8mtffvYQxgImegqsG20+B9rq3cmu5U4U1aCsc3NKTvJ3L2t3K2Wn7R0Rf1rioLgy3GSc4H61v+MbsJBDEvLSndj2A/wAa5VJ0tDuZgeOTngVwYuV3Y9DCQsrjtVOZCrciuB8RobfWrObIVTC43twFAOck/wCetbuoeKreK52NBNP2ZkHyr+fWneM/C2oXnhC38QLBmyWRTuDAnaSRkgdBnHX2q8mquGMg0ZZzSU8FUjLsYtprkTsVs0SSROd1wSoP0A5P5iuh027WKTCMqs3zGANu2+4/wriYLXzIt4G0jkFTyK7jUPG9tqHhex0q10sxXdv5ZaVNo2hRhipHJLdTn9a/QMxwn1iEYTje/Xt5n51lGM+pVZVKMuW3T+byNlZN4BFSiQqc4BpfDVh/bmnLPHcwxyAlTHJuG0/XFaknhLU1Gd1oV9RL/wDWr87xGX1aVR05LY/V8Nm1CrTVRS3Mtrhsc9BWTqet+WhjhDPK3CqoySa1tU0ea2iJlu4YxjnbuY/yFcpeStpysluA7yqQZiSHB7Y9K9HLsjq15aqyPMzbiShhKfxXbKOl+Gr8+KE1O7BZXgddqjOASD179Ku+O0Fl4SumQhkjuI2U9wN44I7YrlNTs9bmb7R/a16hTkYuX4+nPFZ0/jHUtZ0jVPD2uOZZQm61uiMM7Kc7G7H2NfUSw/1Wk6SVk7/efCupLMMTDFKSbi1ptpc9h8JXgl08A9CtalvfNYaisvzbCfmwcZHeuQ8C3O2CNGPBGPxrp9TASMtuBwcjjv6V+fp8snY/SZLmWp1V7su02y+XPGRx5qBvpzVJDc2qtHZzGIj+Enco/Pn9ag0DUFubMIxBaL5T/u9qnuR5c5UcEivRdGhiIr2kbnl89SlJqLsVMXkko+3NkE/eQHFP/s1LuTnJUVdQMI1IP0p5XZiWMhCeoP3Sff0+tePisii3z0X8n+h1U8ylblqL5k9vo7QQqyk+1dFol2YIvLnYk9jXOnxCI/3M0flOvBU/0qxa6l5pMisMdh6V5n9oU6LtFbdDohhZVPeudnIyvCxyMEV43rljJbeKjID8so6fSvSIL1vIyz9a8/8AEN8H8TQxt1UZrenmKxHupGn1dwfMyG/st5UleMiuta0QaTtH9ysS/wAbBg+9Pn11l0tgCA23ArKtUcTeELq4uoeH43mLOAWrivEmgIkyuvGeDivTLFJdUcyZKjHpXOeK9Nmtcs2SoPXFVKDlVczdKMaajfU5jwdobw6i1y+fLiO1D6sR1/D+td7Im0RHHqtZVhH9lSCM8Fl3MPc8/wCFbdwAYeP4Tn86+kwiVKCieBim6k2yn/EoHSpApDce9Rpy5HPHAqVT90eldDmc6iR3UewEjGKrRTZdcdSa0b0b4QQAKy0TbMeOMdqXNcpKxk+Ippr7Ult7dS7LHggdhnr7CsdNIuJ7sNOxYA8ADgfhXbpAFHTkgHNLFp6+crgcHnFcFWg5SbO6nXUYpJHD6x4cSJAdgBz6V0/w+1KyurS98I38ivDOrRtG3G0uvQZ65HP1FXPEtqoRcDtXFXGjXi+IrDUbDcqswW4KkZUDkN+mPyrP2fs5cy6FufPHlfU5K402XQ9VvNIuQRJbyNFk8ZweD+PX8ahmtQeSBn1r0j4u6H9sjtPEkK4Y4t7jH97GUf8AEZH4CvObeYuhjbOdvFfq2V4pYrDxqff6n4/m2DlhMVKH9W6HSfDjVv7O1n7LI5NvcKeOuGHIx+teuTahaGIYlCjHdTivB/D87WmsW24A4lCg/Xj+tesXX7u1QknJ68V5ebYWLrRl3PoMkquVFxfRmf4nu4JFKI7HdkZxiuKcK4852Z8DA38kkH/69buvSgugznnJ+g5rlppiygKeBXoYClaFkeNxG71IJdiG5mE0pB+6nLH1OOlcjqFis0UmUHznOfxrppXCWzHOC5xUegaSNZ1uzs25QnfID/dAyR/T8a3xqiqcr9EzlytNVYxj1aNXw5I0EkLjKr2X1H+NdzcyK9mGP3jzyKx9Q8JXOi2CX1ni4gjIjcvwUY9PqD61Wh1xhGqTxumOMdq/I6nuVGpH7RC04JxL+i6j9hvwrNhG+Vvoehrsb1wwjbPIODivP7iXavmojD/eBAI+tdDomsLqEKRFj5qLjB6kDH611Yeql7tzkxFJv3kdaINsMfpTMB3lhPG5cj2IrR8vMNvyPmXFZJkIvtx9PWuvmaOPluMuraPU9IkLgefbEAMOu0nH86y7OKWwYozP15BNa9gnnTywA4E6kfj1H6iqHjWWfT7+CaNV8q4Tr/tDg15GPy2nXqe2tr1OvDV5UlydDcgvozbjccED1rzvX74P4qidDkEYq42tXIibCqeK5a1lkvNeWWY8g4A9K46eAhSfNE7PrDloz0DebjaPyp99p3l26Bh1NEe2BUbtipLm4mvURYl3fMOlZ1Y9zWDdjoPCN+FIgkQhsVqeK7CG50x2dQDlefxFYtpcW0V0rJtBX2q/r+qR3VrDbxsD8298e3SuynFTqWOecmo3OXvyI7mIjIzitCOTcSmeqE/1rP1kHy45QORipLaTdPb4I5yPwwa9VnGkSquHx0qROD+dNCnzGI7c0/owNURYnkTdGQOOgrPdcS5xWiACo5HPNVJIyckdTVIhj413jHfAq3arluccCqkJwcdKu24AbPbtmhoIsp6+nmQk1k2cX3Tx1rf1VN9ueO3WsezXKj1FYTWp0Qehry6fFrei3mlSHP2qExop7OPmQj8RXz5KWtZyjLtZSQR6H0r6FtpTFKrfMcjH09P1ryj4paEth4lmnhTZFeqLuMAcAn74/Bgfzr6fhbE8s54d9dV8t/68j5TivCpwhibbaP57f15jfEnhSHw1/Zd9FqQuWnlUMAAA3AbcmDyvOOfau61E5t19vevG1PmQb1ADIcjFemnVRd+H47wYG+MMc+vcfnXuYyhUSp88uZ3etrHl5ViKbdRQjyrTS99jmPEF+xkZV5H3c9x61z7OzDAJ5qe+uWncndkZLDjFVGJVGYn6ZNexRp8kLHz2LruvVc/uK99LwEHAXtXoXwx0Ldp/27YGuLttqHH3Yx/LJz+leYXkhY7VGWY8AdzX0h4F0X+xtJ0+0ZR5xjVWJ/hGOf1zXznEGLdOlyrqfS8N4NTqubWxU1lFuoYbFMGGJiWOPvv6/qcfjWDdeHovNwUAya6e8iCaj5YwFZ8gVHqCD7Rkf3q+E5FN3Z96pOK0IIdJVLBEx8pPSsmO0S3vyVjRTk8qoB+ldmsataqcDCgE/jiuevovLuycd+1acitoYqbb1Ojjy1pbsRzzWDOcXxP8OfyroYlb+zI3BwAa52/Obgv6nnFWyY7k1m/lX8Ug7ODUnim2XVdPliUZaCZvLPqQM/rzVeIYdG9TzV+4/dIzkZ/0sj8Mf/XqZPoUl1PPCv7srWHEPK1RSPWvS08DeZmWRyFkyygeh6VymveGf7KuhPE5ZQeQa4JzWqOuMXubsCtPAg68V0OnLbQCMsyjBGc1z+lyg2ykelYXivXJ9PhkMW7IGeK8+vFyWh2UWluerL4bjb5lOM1h6hClvfTwISQh259wOa5Pw38ZYdQWJYZ1k3kKoBzkk10byNJNIznLsSxz6mvSwtNqTkziqzurBdw+fa+WerKMfWsvSpy1zbRn7yyYP4A1sk4SM/7NYU8TWfiGykXmGeYKcdmIrsuY2N1OSxPvmkfIZVxk0uRnnPTihAZbmqiyJKxO2AcEDpimFfmHOc05iSpJAwfz/wA8UbWUp0zyfoKtEMjIKkHPT0q1CdvTP+NMKZwQcdBmlT5cZ6ZqmQiW8HmQnjHGMVh2uUlK4/ireyGXb3Yc1iTDybs/WsZ7m0Hoanl4A569PauZ+J9gLvw9a36by1jP5bFv7kn9Aw/Wukhl8yMA4OBxUGt2pv8Awvq9tt5Nq7DPqvzDiunL6/sMVTqLo/wej/A5cyw6xGEqU31X4rVfieDqnkzunRXHFamjau0mjXmmsc+XJuAH91v/AK9UZRuUMeuM1FpEYW4vpscMETr35Y/0r9PrRTST7n5XRrOEZyXaxYlXtjJOR1qrcfJH1GAatgh3LdkH61Rv22xjFaSdkc9LVpF74e6T/b3jiwt2TfHC/nupGQQvQfnivpOzQR31y3VYvlH4DFeIfAaIDxReztjzEtsrntlv/rCvcp0+x2l0+4DOwZ9+M1+d5/Vc8Ty9kfpmQ01DC83dmBfqDq0fIxgjP41WvsfayB6g/Sr00RaeCU7ODux6Z4/niqN6c3x64yM15CVj2HI2Yx/oQ65Ix09BWDqK/vVbjnGK3kI/s0MBjBFY12u5xznkjGO2KtbELc2bFs6UysOADXNz5Z2xx1FdJpi5spV/2SB/n8K5idiszg8/MamTLiWIVzEh7k96v6sgitFPdrhm/QVUgUeWBn3BrQ8SJ5dvbjpgFvzrNlGz4cmE2m/vSH2MVHHIHpXHfEBImifyvkx1rT0KS4fP2eQq4HKdmFc545hvJIZC2VHevOrK0zspfCQaNIrWqj2rN8T6TLfxOsSgkgijw67SRooPUV3thoguYQSKwm7G8D5O+D/hrVH+IGliaGWK2gkM8wJ4IRSQD+OK+nVbEpOeTSz+BrXwxrE19bqgFwpCjuOcn+lMBPnAdTXsQ+E8+T1Lh/1EZPpj9aqMqvcRBsf6xWH1BzVuY7bQEZG0ms6B5JrmLys71ywPocHB/MilbsNGiqeWh4K5HpSoAmcITng8fnWD4R0fW9KtrmPWb9rqSefzI9zF9owQTk9M9cdBiuhKv8q7jjdnnj61so2MXK+4g37QCrds4I680/Jzny25HQmhk5J38g5wCf8AGmhULeWkmSOvWnZi0Y/53JwoGORz0qQRyZA2KDx3+vtUYTKkncDyBg9acqAsi5b5zjI7U9SbIo6v4k0/w/5DanOkIuG2INrMWxjJwB0GRzRqaqLoFeQc8+uKfeeHdM164tZL60WdYH81A2fl7nvyMKOKhvpG8qGV8b8Etjpkk1M7aJFQvqWIZArR5JweKvWTJJM8bnETjY4J6q3yn+deTeM/HGq2OpGx06RYUgxuchSXJGcZPGK6TwH4iuNcBF/lZYxhmUY3cZBx/SidJqPOXGom+U891Sxk0y6ubKQESW0rxEf7px/SqtguyxDk8uzOfpnA/QV1/wAWLQ2mvS3qrhL23S464y2NrfqtYnh7RLjWriOytwAsUKvIxI4GK/S8Pio1MPCvJ2Vrv9T8mxWDnTrzw8Fd81l6f1YpBdsXPVjWbfMXcAdAK07gPHK8boVdGKsp4wRwf5VnXC459665axOOimpa7na/A8A+J9TTgFrI4PTndXtWru62qRd3BP514p8FPn8W3YzjNk/P/AhXs2sscxb8ZKqPoa/PM8VsZL5H6Zkjvgo/P8yrGolRSM5IKnPTp/8AWrLlz9rlJB46Z7ir8TvCTjB2uD+R/wAKqTqFY4zgk4/OvMSPUNRCDpgIJHzc96y5ADcKpGe9aKvjS2yOA3ODyR0qiieZLE4IIyF6+tMRq6UpW3IPpj61yupDZcN7nmus075bZxk5Vj2rlNXkH2jhjjd61E0XB6lyxO9EGeh/KtPxMCIohjogzWPpzgyIp6PkcH2rX8S8RLu6gD+VQW9yh4ZuBDqUW7ox2n8aveObRDbSHA5Wue02XZcK2cENkVS8aeOYmklgaQCRCUKehFcteF7NHRSlZtGX4WIDgejY/WvYNGCm2Ugdq8O8N3bb9w7tmvTLDxKtnbAuwAA71xyjdnR0JtY1m11lYJbRgwCHcfQkjisLJ8/I9aLDTk0iyNuBzu3MfrUanfKOO4r14O8U+5xSVpNM0LoZs34OQc/pWZ4fkLXFzITgRbU59eT/AOyitZgHt5Dz92s/RICLO5IH+smY/kqj+popq8iZu0WaKvumByTsQY+tTDDOoxyfTtVeMASvk4wQAAOuBU6KmR8wyffGTWzMkc/408WQ+ENH/tCSIzSyP5cMQ+Xe5zjnsAMnNcb4C+Jt/wCIfEqaffWMKC6ZtjwknZhc4Oeo4PPqa7Txr4Og8Z6ZFYmZoJYpPOikCg7Tgg5GeRiszwN8NrbwldSX8139rughjiOwIsQPUgZPJ6VpFxUddyWpX02OzDKhAHqCSKcrHZJIw6cD61Csm6UEcjG4DOafK6QbUkkRETkszAc/jWTZST6E+fs8EjZ+Y7YVz6sQDj8AazpYBJZWzHow6fWo5tUTULuygsnYwxSGWR8cO2COPbGea0Z4RHYWykEAAD6Vjzc0tDblaWpxXiDwHa63creJK0MwAVioBDY9Qe/vWt4d0KLRFxDlpM7i79WPrW5GilTnO4gYx3FR42zYDYGevpWkm2rXJiknc5b4s2QufDVteOgDW8zwnb2WRdw/VTXB+HtWutGlN1aOFeSMA5GQQVHUd69U8d25k8GaurlyUSOUbj6SAfyNeN6XLmxgzz8m364JH9K+14fkquEdKauk2vyf6nwHFEZUcV7ano2k/wA1+hLO7XDvK7l3c7mJ6kk8mqdwpIOBwO+auZyc/Wq8y/Lg96+lS0sfLQk76nSfBuUx+N9g/jspR19MGvbNXkR5YlI2qVG7PQ+1eIfCED/hOYgW4+zTA+/Ar17X4NVM0RtBZm3EeM3AYnOfbFfnuer/AGx+iP0vIX/sa9WOixHdtFyUBwD1wD29xVa/Bj2quQxJHvUVrFcJOpklUlk6KCAKs3SBwoA6E/jzmvIR7Bk2o1e6ntfmD6ZslSfJBxIrMOnXP3cY7Zq9papJGrbcPnBAz2NP0p47S2vIpTsKXjlM5xgsp/rSWDxQ3MqF0+838Qxz3/OlzFcptQQrH5sYZxH5xib5j93HX865mTTrW7W5aRZDJHjbtkPJyM11oQKMFwQXIYZGAT/k1zUxjguJVD7G3NuGR0P+RUOTHGKItN0+2UPO0Tt5IYr+8br27+tXNR027sVvZLm5E0VxKJbdBn90gRRt59wTT7BwAUJHzKQRnIJzxVvxPLm0jTDKVTv34FF7lNWOSt2KzAe9ch4/8PKNdlvhz54WQH8Bmupgb9/we9ZvxFklAsxHGzmSI9B6HFYVNIXNqa95GH4XbMij0OK7nUtPE1i6juvauK8KxSR5MkTKc55FehLJ5lsoIzx0rzJVLM7Ywuj/2Q==";

function generateVCard() {
  return [
    "BEGIN:VCARD", "VERSION:3.0",
    `FN:${CONTACT.name}`, `N:Veenhoff;Patrick;;;`,
    `ORG:${CONTACT.company}`, `TITLE:${CONTACT.title}`,
    `TEL;TYPE=WORK:${CONTACT.phoneRaw}`,
    `EMAIL;TYPE=WORK:${CONTACT.email}`,
    `URL:${CONTACT.website}`,
    `ADR;TYPE=WORK:;;${CONTACT.location};;;;`,
    `NOTE:${CONTACT.slogan}`, "END:VCARD",
  ].join("\r\n");
}

function Wordmark({ size = 28 }) {
  return (
    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: size, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
      <span style={{ fontWeight: 300, color: "#ECEFF1" }}>apex</span>
      <span style={{ fontWeight: 700, color: "#ECEFF1" }}>dynamics</span>
      <span style={{ fontWeight: 400, color: "#0B7A99" }}>.io</span>
    </div>
  );
}

// Thin white line icons as inline SVGs
const Icons = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/>
    </svg>
  ),
  phone: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
  location: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  website: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
    </svg>
  ),
  download: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  share: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ECEFF1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

function ContactRow({ icon, label, value, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{
      display: "flex", alignItems: "center", gap: 14, padding: "14px 0",
      borderBottom: "1px solid rgba(236,239,241,0.08)", textDecoration: "none", color: "#ECEFF1",
      transition: "opacity 0.15s",
    }}>
      <span style={{ width: 24, textAlign: "center", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.5 }}>{icon}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, color: "rgba(236,239,241,0.4)", fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 15, fontFamily: "'Inter', sans-serif", fontWeight: 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{value}</div>
      </div>
      {Icons.arrow}
    </a>
  );
}

function ActionButton({ icon, label, onClick, href, primary }) {
  const style = {
    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
    padding: "12px 20px", borderRadius: 6,
    border: primary ? "none" : "1px solid rgba(236,239,241,0.25)",
    background: primary ? "#54C3EA" : "rgba(255,255,255,0.04)",
    color: primary ? "#001732" : "#ECEFF1",
    fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: primary ? 600 : 400,
    cursor: "pointer", transition: "all 0.2s ease", textDecoration: "none", width: "100%", boxSizing: "border-box",
  };
  const content = <>{icon}{label}</>;
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={style}>{content}</a>;
  return <button onClick={onClick} style={style}>{content}</button>;
}

export default function BusinessCard() {
  const [shared, setShared] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setTimeout(() => setMounted(true), 50); }, []);

  const handleSaveContact = () => {
    const blob = new Blob([generateVCard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "Patrick_Veenhoff.vcf"; a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: `${CONTACT.name} — ${CONTACT.company}`, text: `${CONTACT.title} at ${CONTACT.company} · ${CONTACT.slogan}`, url: CONTACT.website }); } catch {}
    } else {
      await navigator.clipboard.writeText(`${CONTACT.name}\n${CONTACT.title} — ${CONTACT.company}\n${CONTACT.email}\n${CONTACT.website}`);
      setShared(true); setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0E1621", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 16px", fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Space+Grotesk:wght@300;400;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #0E1621; }
        a:hover, button:hover { opacity: 0.85 !important; }
      `}</style>

      <div style={{
        width: "100%", maxWidth: 420,
        opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}>

        {/* Header card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(11,122,153,0.12) 0%, rgba(84,195,234,0.06) 100%)",
          border: "1px solid rgba(236,239,241,0.08)", borderRadius: 16,
          padding: "36px 28px 28px", position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0, opacity: 0.03,
            backgroundImage: "linear-gradient(rgba(236,239,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(236,239,241,1) 1px, transparent 1px)",
            backgroundSize: "32px 32px", pointerEvents: "none",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <img src={PHOTO} alt="Patrick Veenhoff" style={{
              width: 80, height: 80, borderRadius: "50%", objectFit: "cover",
              marginBottom: 20, boxShadow: "0 0 0 3px rgba(84,195,234,0.2)",
            }} />
            <div style={{ fontSize: 26, fontWeight: 700, color: "#ECEFF1", lineHeight: 1.15, marginBottom: 4 }}>
              {CONTACT.name}
            </div>
            <div style={{ fontSize: 15, color: "rgba(236,239,241,0.55)", marginBottom: 16 }}>
              {CONTACT.title}
            </div>
            <Wordmark size={22} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#0B7A99", letterSpacing: "0.06em", marginTop: 4 }}>
              {CONTACT.slogan}
            </div>
          </div>
        </div>

        {/* Contact details */}
        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(236,239,241,0.08)",
          borderRadius: 16, padding: "4px 20px", marginTop: 12,
        }}>
          <ContactRow icon={Icons.email} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
          <ContactRow icon={Icons.phone} label="Phone" value={CONTACT.phone} href={`tel:${CONTACT.phoneRaw}`} />
          <ContactRow icon={Icons.location} label="Location" value={CONTACT.location} href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.location)}`} />
          <ContactRow icon={Icons.linkedin} label="LinkedIn" value="Connect on LinkedIn" href={CONTACT.linkedin} />
          <div style={{ borderBottom: "none" }}>
            <ContactRow icon={Icons.website} label="Website" value="apexdynamics.io" href={CONTACT.website} />
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          <ActionButton icon={Icons.download} label="Save Contact" onClick={handleSaveContact} primary />
          <ActionButton icon={shared ? Icons.check : Icons.share} label={shared ? "Copied!" : "Share"} onClick={handleShare} />
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 24, paddingBottom: 8, opacity: 0.3, fontSize: 11, color: "#ECEFF1", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} apexdynamics.io LLC
        </div>
      </div>
    </div>
  );
}
