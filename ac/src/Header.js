import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStatevalue } from './StateProvider';
import { auth } from "./firebase.js"

function Header() {
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  const [{basket,user},dispatch]=useStatevalue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAAB8CAMAAABjR1ZHAAAA0lBMVEX///8LCwr1mQAAAAD1lAD1lwCfn58sLCtXV1eioqJaWlkGBgX39/fJycnU1NRFRUVOTk12dnaFhYTt7e2SkpIgIB/0kQC5ubnOzs7k5OQSEhHc3Nzm5ub09PSYmJgcHBqvr6+9vb1vb25paWl/f3/+8+E2NjUXFxYpKShAQD8xMTFjY2L//fb2oixDQ0NLS0r4umj84bz+9Ov3sVL6yYn85873rTn60Jr3tFr72rD958v6zJD2ohv73bb2qDX4v3X71qb3rUb2qjL5xX75wHH2ogse2DVrAAATj0lEQVR4nO1daUPiPBAW0qpYQAS55VQOb1F5FcRrdf//X3rbcrSZZ9KWs+o6n3YxTSd5krmTbm0pqFJO5Ov1ej6fKMdVbcKno0KjbnHZKByFzcoGKJNvngmJTg8TC6OTaaT329lu+7qaULQo15untdrZ9UFsnrcUqilDYrJzXk8uyuTcdNSo7p6emcO6Oo8lKkt0VM5Xd7O17tX5Yb7o3bDatkYZcZM9AecNLz4P0y5ytcyn3HN3gDOXqdbcLY4LgYbTaFqNDYlL65da1Wt0mZPdwJT2WCONA4lnc+HGyp7sJtyzc+i0jceyUjd5dQ8pGK8DTm1btTSOZD7FyXQEXQlis49mRnownha0Rcp32VeqEQWTFjh7qo25tXUq5qCUqpdYh1u41x7rNka6Lrt+l7lv88wXrskb6ag7Ckhj8mOiNp7+JnYnSu5XN5gJFqKqHqJFh3Re6CSdZ/gHywo0FaPlO6mX2Lebr+0qV0SXTM+h/Wt8jxt8k9mpaU9Yxs8dszt8m64ga2oy11x3QuR9XmiIc9UIrdk9851eYfDrJzkfMJx4KLfVc2SuCIVE6XDAxPfZnkSbdpI8DcK32OGEeIwBJp7ihyDEdGWdqMYorpQCvuq7eOxXpFcADMND3fvtosZryBoHzK6iK3Eqv7gRZMTWcwYjKDhgjpXT3hnL2EP1C8WuApfjYHNrsMgsDUzarwMh6kGBOVDvPElgBMXFfC6LHDPA1D2mfc96JuE1Sn7Jm0orIJOGiK0eGOUOd7+XQ4YBxmN6ImLbebRcCjpk87ljeDPqmMqO15tNHRD3amD2wEnMdHAmDYHG3ZLABHq7IRj9hsBkOh6djVW0TZV28CGbHYNlCDum4iGnzA7OKqay8H7HHo7Pa5VhB6inlgMmFlDUMysCgfEG2ZEXaoHHPtemb6Y7plT23A8REYsbfuIaYizFwNJ23AEs3aWA8ZS80nMd4ByAyXh3ZgjPlxoqXzMiqPFBgcl6bhgLWp8GFnZ0eOfsI0ou0UNcBpg5ZApudgpM1UdczGQS43BYw905Pc2yo5559gpgIqWSD/OG7zDBMCvgIxYo2bPTM9bjNAQNk8wFjCE7mIzsmUTqsE9YUxSYAz+URVMxZEPsHCSKmUrlKHHMDNowfIBZARnU88YNI0RqO3lUiWfKsTY3P9ukh8wcFk5Ejj8wmIrSXjq2fbJbgz8ZBhFmNSpQ/PgwIvZz4HGYDprjfhZOmf1EFuMagIkI2V86gvG7A0vxQ2bmQKRsK8Ji3Ns7fqtibzIHR4fQAZUoBJiIw6pK09qDr9AxiYhkdlUwdkCtdR6YaVTey19RtxBy6AnEMgmA5JHJNthlxSRDZU7iy29PYOdp918J/1SKUmCcwUdU68J6fYPiSc1h3Mc0zsgCI8RuLFFI1M+V1pQhusexRKLKxk4J+DSCAToInE+j5J3gmFK8y4iEA6kJbBh5T4AlTbYMC4wh2tVCOZk44Vwa26Skeg29bpR1Mt8sMKI9td2SyhUTm6zpMhNXk1Vohmx6A8zpI1zVwfJmTOxI7EgtICwtuvJmpOwbHUkOc+M3JjFmc2iMuWmvfOJykE4tgp1MTVEGGLHvSJoKq3VFzbXh0TCUdTc1UJiYDehCsOpZQhkIoghiMVSU4wRJq4oBRordYDzTXvlEjjA+dzFCV8yp3ACBkeUIY+qSqAu8gohLOn3MbkAt5JVznRLn6xFJXTmjLy/RXqg/La9cBpjZfrHoCGwAW1AfyvqXCcOBdyXO5AYIDBkbHRq2gOCDxPpWxs7BzgYgIjjFELHhQ72EOCG6LzeBZSWzZhG4OdKqQ/OYBE9wS15ZPyeqB9dOErvEhPWpoBFZ+e8AjEGMXQw0iQ4NedAGsrCq1NPnbcfChalBI4YJHiAxETDKO7NmQEbiu93LjgGmLj2ehPlzrfxMslGvHrd3OVOGCkFDtvIRGCoP4c1T53ZGxQ4Vl8zcm80S+Vh6N0t9R4t8BD1LaDHgRouj8oJ+KtDEbTQCMCIrY1+hhqFBVr6K9sBDkv+OwNBZRWCIAkBxyQLjQShxOPhk4kQsTWyjTbaPHcHMukOZoGMgcwK2Ty3YmOcHhhYmUGMdI1nUjd0EMEwETHRozh3MNi6Lh56OS9whMHR6wAkjIklFIMp8gaFexhVoKTp+qoX9imWA5gcGBSwzZzhpnIiEaLl7XVFRZkToqoTHwe7jCRwo8hwFxgALgu45atcxwPgLIplQx/j1wJmxNHDO2G1ckhKdf5dEpO/BhBbaIF58Z5KJRj29d1YCM9sPGLFD9wN1r6knxMRcAgJTLDTy2839rIGBI58emBw+E18DL4aNKKC8cykiumMwVYTJWZ7lTCGfTmVnIUZwwXyBOaXjoyYn8jY/MOVErHnaEUoufXoAE5evFMAyQa4eAeSoUXOkOQDTpI9j+IEZbv6gXfKJCvsCc+1XyYAFSnMBEy9Ud7sKPIL1wGZnOL3GWPpMXV8RWzl6BIAB6wHD15Tb7bY6o+yQLzCwH6jYwGrLOYApnGd90gl+PWzxsUuuXpkJ+TOt4l4hVAAG8PcBpnzS8R+uResAJrDyr596Fi8H6MHuhcElEqDKNMIDwzhqjokAwIBZ5wlM+TgYKpEAwOz76hgIlQYEpn4WvDTRAxhMiKpia1g2EhAY5+3LAbMdCV6rEBowR7tz1DB5AcNUDjOFjBahExoQGEeRLANMZm+eqq2wgKlH5mDSCxgugZTlT28EBQZsN8cjAj8mODBlz4Ka+c3l9QDjWeofoExmRlwhkyp7g95OQGAcm3jxHVPkCyeVdSThAMNUwkSckg/mkJQKmDgNEEVYl39MAYHBRJ9j3iwMTIYJslqo7Ow2q/lCuVycNySzFmC44mELldPzk3rCZBITZSpguNglnBdSN2aBKQEwjspaGBguiyfa6eRM6EJ0OQRgCrhfTFj28sX4rAEdgwIYpiLYUNcHBLTKcMcsL8qYuirRzbunFqLLmwcGQ1bWwUN3lDYoMJx88MgxMGlzbnOhjnEqiRYEpsgUMTbld38BYBiJUpLVdVBgmKMN6iPKbCUhZ74hMEuby0z5J10/4QODq0dkSVIjIDBsuZJHaSBW+ECOzyJsVZ/9bTFgmPAbeFrhAwO2EQaCg+VjjrgkjFdxABPE5PSRV6vFgMHcGyRX506UrRyYDNYzgFYIBgxX9uh1fH2rjPYW4/FkvPbVYsCgjMD1Q/PxGwcG81AdyGhhCREDDGNzMwvRTXhkiT94Sxp55mOCAFNG5xGOqgFvGwcG8+5YEBHEj2EMHSbL780YCziuimvnjwsBg8O5pk9tHWXpOYMNA8OsWpxNTLvjBDK3UShdfhXrTAKSe7lLUS8EDFZnIqO4q3yqZFYNDGOTofjBkUA+ijn5icUHlFCMQi0FVyPrYn8hYGANMRIUWKPn8NYNDEpw5t4KiPeBfcAewqyVjNLO6Xk6lk/yF6UwSX9sBBV7bpt6IWColOLSRXghBZmXdQODK8PAahZkkpzi4U4o2X3N4qCR8xhWYzAlsmgvQ7WmO/a2EDDAJ0pmLhoi879uYJiidQAGc8XUn/e/zcBGqOlbJokyEp1btx5aETBg7zB1PqTrjQPD3PTCHH3qSrETJgrKkQlOpCoZpugggV5CFeNGdyFg4EQ+FhZxpow8r+sGhimIoNLEv9xVcU0XQ+a2OXBBk0HtRUM4tDRbziIsBEwNuCLnC7kNQ1lbNzCMmKLShLu1TnLpufILJRnSCRw0mIlUQZ9DarAQMDsYWpYjDhlWZcqKdd3A4Nqg0oS9gkeKp7HrS02GCxnGKJSEZJwqYRIVXQgY5mCmfPxDcROdJEvWDQw4UhFS2a3QH271H/D2pBm57QuYAzm8hh6U7IIuBAyXZnXtw4pKMosz19xv3sGMiJLLUcirqjRcnfheKwTPJlz9wx9dkg4SjTTyvRAwTHrCdP6n85rgqgEmjVzwrT0kw12bUptOXAUvDZmS63zU/MC49iRj8k0vKs7ghYzUgVpNENN+sh0rF4vlesqrXsilizYfxLQamB5HuVhOprseat05d7AUMJzH0D1oJJOJJp58hcshFgv7s+Xy1unlkk+JsOtQ2NqBYS/3s9zBjuIyFqebqcxZChi2BF11RRBYjIsBo7qC0+8KPrcQXjswKlvX8OVydvJ9OWCOgl+phUNbVWqZfRvzkyO/159aDnQ5JHc93exFywET/EJO5urFBYsxlBcku7vaZ247r8/6XT8wQa5/FwZzgdfV1ONAYOSPaeAA5aOWAa+w5SrUFgQmgEssjvFIWMQV79hA+ZL/pcdCNPDqtfMZIxIwY+Wwc5U6b56k0wcHx6l2h6JDz8Dyd3ISYq/3XbTgz8/1Mix/iSQRRdft224AGD4A4W5vqTxZ4EgXljvAmAB0Uyf5ZNntvleKyUb62v2hCzrFFVqPyk4VV3CzcIms91qYBCck51rsSzGJTZTI+tyvOykzcw9FSF1MgDFnvn2SUHwvY+uocTy7nxXWftx3zwhuvyxT7a/6AMD4ZXWYffpRjI0UlXt98cAQV2Pb3ZUMI7NkAyNENu1zvVylsRux38RM8omPad7hK6CXOLjEfOllOrqr2UCmVoLhe73veo5hqL8/4IoFl6eNRFaepbwwlf1ZPchnq4rjDyExBZfK2I/NxK6i82VOlNXZg36GLA3GQpb5sIA/MHA4dpGDS4qvtwhx7doFiXEbcU3F1bEJCz9xDFUVV6ZkVEvY1FvKe+uoegwAjFNWkDmkJqNlTablNWB9JUQwlUNFcl8uVtrkaQvg7ZC24MRCnd7QbR+QkWckafmCIoWVFcHuLp2SamslU2haW99bqqu7OqFDA2laNEgLd5VyJbYv/S2yh/s+zfVqUuK6u+NQlynVqp7tuFvgcoyf7EgtFF/dyl/LIzhLA4DFrlAcdF0NJQ8Ml2lt/zvlectjvCnNTptpnNyTmhzQHgr16sFeard5WM/z36krFsL/Kmaibn2dL3V+sl1v8Os66f2RveWpsH3cnTqmqcNG+HPySy4yXZ+yyu7+pSXpotUfDoet27D5+KUJXQwHH3cjPZfTbMrlov99vg3D5upfp+H9yEJD1/XojMz/mD/d/WITGg0/oyYmUZ507e4ibAaXp+84hMGlpqtQsUl7CJvFZal1Gb1phc3EnPQ2Uu6V2Z55D5vJZelD07Xox3cyZ4YvvrCYwLyEzeay9KZZInn08G0E2r23DJsCcxk2n0vTo2Zry8tB2IwEozd7u+j62PwyDeQx2dbZzwJm61OzR6K998LmJAh9mhjk9Ojo5fH1/mHQM51Ki1q9h48bt+b5CcBsPY0HpH8L8//26eG5b0LBiN6L4fsMme+v/C16m0gBXf92BppMrdEUGf0xbF5WQr3oZEAmNP2wmVmG7rUJMNp92Kyshvov0xFZAu3bWGhAwxkw30JhBqDbm5nmNM2AwXeFpj8bxLfe+BI9Oeamnrt8+k4up0P9yY7RR991aTE0HLmsTS368U3sANNCc/4zFWU/wyibUutOi7qg0W6+vrK5GN78zUUdRf8wGYH2FCJTa6B7KQplSrT7L71tbh9ecqYA1nOzUPLN1Lr8OSpmTMO/rk1jb5u7L2sIDG/0yTrSR9PfXiY/XH5Vphemi0cSujW1zesXDAi0nkY5dPNbE39MvwmVufXQAw2q63pu9PSlRNrt23vOHRfLTQXXVPdrX3ApLU+tFy1KSNdy729fxIC+GNzJOWXdcSbH8difKMnGBJtmjM1/D6Hvm4vBI830ay8OV5fjP2kfIbK4VmI2zRibPw8hmjtEgk3EmCso1v+pNpmLuE0zxib6+hyGoBia2h550kZuDJ4mkuxHeZeUbm9yfApXtzdOb5Pg9AePOlerpBM/cmIs/5gApoL6LwpobP9G+/PU24Q5MBw8RjW2VknP3ck6byLJvn8dhi8N/nrUo1hrePT6vEZxfjF8uzNfwxdf6NrombR/G0syjf7+A+niSfcsFdKtP78/9FZvrbV69y9KUKzZ159AmI4l2c/WMDO6vdc5A00GR4uO3j+eh6uBpzUcfL6MFOJrtl1eUYxOJNnPdC4Zun3VfKCZoKNHL+/uTXgWNQsuWsPnj/dLe594lo7p2iO3Bj5sNrXXZQb7vaj16S3QHHTG8LzcfT49D/strpIF6aLV7w/f7m9sSPwwido6n98TdjpJH32RAMVmqPURDQTNBB67Fk+Pji7f328+rOqvvk2tGVn/6w0enj5u7t4vR7aRp/tDMoblXSGqeuMN88NNZaDbey8LTY2QPj5RRBWG83NAQKaP3Skn/tHq5ucGY9R0+3Cp9GvmQWouJGRUvGqrbm1B9t8PjV5608Xznfqs0LrJ9Fs8qxCspLI+Cj3KGhb1X4Mrm5Wiot8NvLW6qfr16D+Ly5Yl0d43vG1MPXX54RdgGGomLj84qByI+q9+B+1WisroJkDE9C2n/fO4mHTRe4xuABsLlcdgodLWIxML+Cep9XY3Wis2NirPv7O9ALV6NyOPOONyoOiXv6gsQRfD+xfveOMioGjR94evXwX65am1OnDsNMLL/Yri1L9kgfP07pU+CbZRrNzO8Fd+rZyGg8eRHihCTCAZY/K0hnzbL03pot97u/mja3D7jgIQk6J/Xge/wmtDdNvvDZ5u/vzVPOjvf48fg17/V8mHQ9YVb71nkwY2mf/oDa0kWth8bYj+B+WanFhNThseAAAAAElFTkSuQmCC"
        />
      </Link>
      <div class="header_search">
        <input class="header_searchInput" type="teaxt"></input>
        <SearchIcon class="header_searchIcon"></SearchIcon>
      </div>
      <div className="header_navBar">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">Hello {user?user?.email:"Guest"}</span>
              <span className="header_optionLineTwo">{user?"Sigin Out":"Sign In"}</span>
          </div>
        </Link>
        <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orderrs</span>
        </div>
        <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div class="header_optionBasket">
          <ShoppingBasketIcon className="header_bagIcon"></ShoppingBasketIcon>
          <span class="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header
