const Sociallinks = ({className}) => {
  return (
   <>
     <div className=" flex justify-center opacity-80 text-white items-center mt-3">
    {/* === GOOGLE PLAY */}
    <svg className={className} strokeWidth={1.5} stroke="currentColor"  viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" />
    <line x1="15" y1="9" x2="4.5" y2="20.5" />
    <line x1="4.5" y1="3.5" x2="15" y2="15" />
    </svg>

    {/* === SPOTIFY PLAY */}
    <svg className={className} strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none" >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527" />
    <path d="M9 15c1.5 -1 4 -1 5 .5" />
    <path d="M7 9c2 -1 6 -2 10 .5" />
    </svg>

    {/* === VIMEO */}
    <svg className={className} strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 8.5l1 1s1.5 -1.102 2 -.5c.509 .609 1.863 7.65 2.5 9c.556 1.184 1.978 2.89 4 1.5c2 -1.5 7.5 -5.5 8.5 -11.5c.444 -2.661 -1 -4 -2.5 -4c-2 0 -4.047 1.202 -4.5 4c2.05 -1.254 2.551 1.003 1.5 3c-1.052 2.005 -2 3 -2.5 3c-.49 0 -.924 -1.165 -1.5 -3.5c-.59 -2.42 -.5 -6.5 -3 -6.5s-5.5 4.5 -5.5 4.5z" />
    </svg>

    {/* === REDDITE */}
    <svg className={className} strokeWidth={1.5} stroke="currentColor"  viewBox="0 0 24 24" fill="none">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z" />
    <path d="M12 8l1 -5l6 1" />
    <circle cx="19" cy="4" r="1" />
    <circle cx="9" cy="13" r=".5" fill="currentColor" />
    <circle cx="15" cy="13" r=".5" fill="currentColor" />
    <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5" />
    </svg>
    </div>
   </>
  )
}

export default Sociallinks