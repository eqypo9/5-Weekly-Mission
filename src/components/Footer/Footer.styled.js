.Footer {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 16rem;
  margin-top: 4rem;
  background-color: var(--black);

  @media (min-width: 768px) {
    margin-top: 6rem;
  }
}

.Footer-items {
  display: grid;
  justify-content: space-between;
  grid-template:
    "footer-links sns"
    ". ." 1fr
    "copyright .";
  width: 100%;
  padding: 3.2rem;
  color: var(--text-gray);
  font-size: 1.6rem;
  font-family: Arial;

  @media (min-width: 768px) {
    grid-template: "copyright footer-links sns";
    height: fit-content;
    max-width: 192rem;
    padding: 3.2rem 10.4rem 0;
  }
}

.Footer-copyright {
  grid-area: copyright;
  color: #676767;
  font-family: Arial;
  font-size: 1.6rem;
}

.Footer-links {
  grid-area: footer-links;
  display: flex;
  column-gap: 3rem;
  padding-right: 1.8rem;
  color: #cfcfcf;
  font-family: Arial;
  font-size: 1.6rem;
}

.Footer-sns {
  grid-area: sns;
  display: flex;
  column-gap: 1.2rem;
}

.footerWrap {
  display: flex;
  justify-content: center;
}

.footerContent {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.6rem;
}

.footerHistory {
  text-align: center;
}

.footerSupportLink {
  display: flex;
  justify-content: center;
  column-gap: 3rem;
}

.footerSnsLink {
  display: flex;
  justify-content: center;
  column-gap: 1.2rem;
}