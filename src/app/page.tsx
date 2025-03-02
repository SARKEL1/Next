export default function Home() {
  return (
    <div>
      <h1>Witaj na stronie głównej!</h1>
      <p>Wybierz jedną z opcji:</p>
      <ul>
        <li><a href="/about">O nas</a></li>
        <li><a href="/contact">Kontakt</a></li>
        <li><a href="/profile/1">Przykładowy profil użytkownika</a></li>
      </ul>
    </div>
  );
}
