<div>
<ul>
  {pokemons.map((pokemon, index) => (
    <li key={index}>
      <Link to={`pokemon/${index + 1}`}>{pokemon.name}</Link>
    </li>
  ))}
</ul>

{!isFetching && <button onClick={loadMoreItems}>Load more</button>}
</div>