import Styling from './styles/navigationBar.module.css'
import { Button, ButtonLink, ButtonSecondary, Logo } from '../index'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function NavigationBar() {
  const { status } = useSession()

  return (
    <div className={Styling.container}>
      <div className={Styling.content}>
        <div className={Styling.navItemsContainer}>
          <Logo />
          <Button id="account" icon="fa fa-plus" text="Lease something" route="/lease" />
          <ButtonLink icon="fa fa-search" text="Search" route="/listings" />
        </div>
        <div className={Styling.navItemsContainer}>
          {status === 'authenticated' ? (
            <>
              <Button text="Account" icon="fa fa-user" route="/account" />
              <ButtonSecondary text="Sign out" id="signout" onClick={signOut} />
            </>
          ) : (
            <Button text="Sign in" id="signin" onClick={signIn} />
          )}
        </div>
      </div>
    </div>
  )
}
