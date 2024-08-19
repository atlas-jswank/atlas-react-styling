export default function DarkMode() {
  return (
    <section className={"task"} data-task="04. Dark Mode">
      <button
        className="border-2 rounded-md p-1 border-[#00003C] bg-[#fef9e6] float-right"
        onClick={() => {}}
      >
        <img src="dark-mode.svg" alt="dark mode" />
      </button>
      <div>
        <h2>Terms of Service</h2>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            aliquam metus quam, et convallis est vulputate vel.
          </li>
          <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
          <li>
            Phasellus eros risus, maximus quis ex id, suscipit aliquam arcu.
            Maecenas metus orci, tincidunt sed ante vehicula, aliquet auctor
            nunc.
          </li>
          <li>
            Vestibulum id vestibulum dui, nec suscipit ante. Maecenas et euismod
            est, at eleifend eros.{" "}
          </li>
          <li>
            Sed eu justo eu lectus bibendum commodo. Fusce lobortis, dui id
            molestie tincidunt, tellus neque pulvinar leo, in congue ligula
            ligula vitae tortor.
          </li>
        </ul>
        <div>
          <button>Agree</button>
          <button>Reject</button>
        </div>
      </div>
    </section>
  );
}
