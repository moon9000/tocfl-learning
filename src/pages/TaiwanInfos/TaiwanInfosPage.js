import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Wrapper } from "../../components/Wrapper/Wrapper";
export function TaiwanInfosPage() {
  return (
    <Router>
      <Wrapper>
        <div className="Home">
          <h1>Taiwan Residency Infos</h1>
          <h2>Liens utiles</h2>
          <div className="flex flex-col space-y-2">
            <a href="https://www.roc-taiwan.org/fr_fr/post/306.html">
              Service Visa du bureau de taipei en France
            </a>

            <a href="https://www.foreignersintaiwan.com/taiwan-faq-24120352112183938988.html">
              Infos générales sur l’administratif à Taïwan
            </a>
            <a href="https://english.ca.gov.taipei/News_Content.aspx?n=EB3C54A9CB51087C&s=CE063C5CD4357F7D">
              Infos pour l’enregistrement du mariage
            </a>
            <a href="https://www.roc-taiwan.org/aubne_en/post/3026.html">
              Certification du contrat de mariage
            </a>

            <a href="https://www.11fleet.com/resources/a-complete-guide-to-every-resident-visa-in-taiwan-updated-2021">
              A complete guide to every resident visa in Taiwan (updated 2021)
            </a>
          </div>
          <h2>Understanding the various residency visas available in Taiwan</h2>
          <p>
            In Taiwan, if you want to stay for a long period of time, you have
            to choose between those visas :
          </p>
          <ul class="list-disc">
            <li>ARC</li>
            <li>APRC</li>
            <li>Classic Visitor Visa</li>
          </ul>

          <h3>ARC</h3>

          <p>
            ARC is the basic visa to be a resident in Taiwan. It is usually the
            starting point to come to Taiwan, and it can be exchanged later on
            for an APRC
          </p>
          <p>
            There are various methods of qualifying for an ARC, including
            undertaking sanctioned employment with a work permit, joining family
            members (including parents, children and spouses) who are themselves
            legal residents in the Republic of China, undertaking missionary
            work, investing in a local business, or studying at an approved
            institution. The relevant authorities may also choose to grant an
            ARC to foreigners who fit none of the above categories on an ad hoc
            basis. The ARC is issued by the National Immigration Agency.[2]
          </p>
          <h3>APRC</h3>

          <p>
            APRC is like the ultimate visa residency. Obtaining it grant open
            work permit, which makes it much easier for a taiwanese company to
            recruit a foreigner, as they don't have extra administrative work to
            fulfill to let you in.
          </p>

          <div className="flex flex-col space-y-2">
            <a href="https://www.immigration.gov.tw/5475/5478/141465/141808/152932/#:~:text=(1)%20A%20completed%20APRC%20Application,be%20returned%20immediately%20upon%20verification)">
              Official requirements for APRC
            </a>

            <a href="https://www.allhandstaiwan.org/post/opportunity-or-dilemma-work-aprc-vs-marriage-aprc">
              Choice between normal APRC and Marriage APRC
            </a>
          </div>
        </div>

        <h3>
          Procedure for entering Taiwan as a spouse of a Taiwanese citizen
        </h3>
        <div className="flex flex-col space-y-2">
          <a href="https://tw.forumosa.com/t/arc-aprc-work-based-vs-marriage-based-vs-gold-card-advantages-and-disadvantages/175633">
            Interesting topic on the matter
          </a>
          <a href="https://www.roc-taiwan.org/fr_fr/post/8838.html">
            BRTF's procedure
          </a>
        </div>
        <p>
          The normal way is to ask for a Mariage-based ARC, then after 5 years
          of staying in taiwan with an ARC (renewed every year), asking for an
          APRC.
        </p>
        <p>
          When renewing a Marriage ARC: first ARC lasts 1 year, then can chose
          1, 2 or 3 years for renewal
        </p>

        <h5>Essential stuff to take into account</h5>
        <ul>
          <li>
            You have to stay at least 6 month in Taiwan each year on an ARC to
            be able to ask for an APRC
          </li>
        </ul>

        <h3>Classic Visitor Visa</h3>
        <div className="flex flex-col space-y-2">
          This visa allows you to stay in Taiwan for three months without any
          administrative work before-hand. It is not convertible, so the plane
          ticket must be a round trip.
        </div>

        <h3>Reflexions sur quoi faire</h3>

        <h1>
          1er choix possible : Partir à Taïwan avec un ARC et y rester plus de 6
          mois chaque année
        </h1>
        <div className="flex flex-row justify-between space-y-2">
          <div>
            <h4>Avantages</h4>
            -Ca permettrait de changer de vie <br />
            -De booster mon apprentissage du chinois <br />
            -De profiter d'être en télétravail total <br />
            -La nourriture est incroyable là bas
          </div>
          <div>
            <h4>Inconvenients</h4>
            -Laisser la maison vide pendant une très longue période : risque
            d'incendie, fuites, explosion, cambriolage, squat
            <br />
            -ne pas être sur que la vie là bas me plaira vraiment <br />
            -les contraintes administratives en amont et pendant le voyage
            (courrier en France à traiter, maintenance chaudière, le visa de Y-H
            etc)
          </div>
        </div>

        <h1>
          2eme choix possible : Partir à Taïwan avec visa touriste basique
        </h1>
        <div className="flex flex-row justify-between space-y-2">
          <div>
            <h4>Avantages</h4>
            -Aucun administratif à faire en amont <br />
            -Permet de tater la chose en y allant sur une durée limitée (3 mois)
            pour voir si j'ai envie de rester plus ou pas <br />
            -Moins de risques vis à vis de la maison que si je pars plus de 6
            mois <br />
          </div>
          <div>
            <h4>Inconvenients</h4>
            -Laisser la maison vide pendant une assez longue période : risque
            d'incendie, fuites, explosion, cambriolage, squat
            <br />
          </div>
        </div>

        <div>
          D'un autre côté, je me dis que quitte à partir, autant partir
          sérieusement et donc plus de 6 mois, d'autant que le PVT ou le visa
          famille nous le permet...
        </div>

        <h3>
          Conseils vis à vis du logement avant le départ, que ce soit pour 3
          mois ou 6+ mois{" "}
        </h3>
        <div>
          Quel que soit le choix qui sera fait, il faudra bien quitter le logis.
          Quelques conseils glanés de ci de là :
        </div>
        <p>
          <h3>1) Mettre le logis en "hors-gel".</h3> <br />
          Lorsqu’un logement est vacant pour plusieurs mois (résidence
          secondaire, défaut de locataire...), il est impératif de maintenir une
          température « hors-gel » à 8°C minimum. C’est d’ailleurs une
          obligation dans les copropriétés. Cela permet de protéger les
          équipements de la maison, les conduites d’eau, les tuyaux de chauffage
          en cas de gros coup de froid. Au redémarrage, il y a aussi moins de
          condensation. En position hors-gel, votre chaudière ne produira plus
          d’eau chaude sanitaire et tournera au ralenti afin d’apporter juste la
          chaleur nécessaire évitant les températures négatives à l’intérieur du
          logement.
          <h3>Couper l'eau</h3> <br />
          <h3>Couper l'electricité</h3> <br />
          <h3>Mettre la chaudière en mode ni chauffe eau ni chauffage</h3>{" "}
          <h3>
            Laisser de l'air entrer et sortir du logement autant que possible
          </h3>{" "}
          <h3>
            Mais laisser un maximum les volets fermets car ça evite le gel
            notamment en hiver
          </h3>
          <h3>
            Couper l'arrivée de gaz est apparemment conseillé, mais en même
            temps il est dit qu'il vaut mieux laisser un pro le faire...
          </h3>
          <br />
        </p>
      </Wrapper>
    </Router>
  );
}
