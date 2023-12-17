/**
 * Main Layout Screen
 *
 * @screen
 */

import { Loader } from '@atoms';

import type { LayoutProps } from "./types";
const MainLayout = ({ children, loading = true }: LayoutProps): JSX.Element => loading ?
  (<Loader />) : (
    <>
      {children}
    </>
  )


export default MainLayout