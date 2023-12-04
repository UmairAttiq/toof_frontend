'use client'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({open, handleAgree, handleClose}) {
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full">
                                <div className="bg-white px-4 pb-4 mt-12 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3 text-left sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Conditions Générales d’Utilisation de l&apos;application mobile TOOF
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 1 – OBJET DES CONDITIONS GENERALES D’UTILISATION
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Les présentes conditions générales d’utilisation (ci-après « CGU ») ont pour objet de définir les règles d’utilisation de l’application mobile « TOOF » (ci-après « l’Application ») éditée par la société Système Solution Consulting, société par actions simplifiée au capital social 1.000 €, en cours d’immatriculation au registre du commerce et des sociétés de PARIS, ayant son siège social au 85 Boulevard de Courcelles, 75008 PARIS – France.
                                                    En installant l’Application sur votre terminal et/ou en accédant à l’Application, vous acceptez sans réserve l’intégralité des présentes CGU et vous engagez à respecter les obligations à votre charge. Dans le cas où vous n’accepteriez pas les CGU ou auriez des réserves, merci de ne pas utiliser l’Application.
                                                    Les CGU expriment l&apos;intégralité de l&apos;accord entre vous et Système Solution Consulting applicable à votre utilisation de l’Application. Système Solution Consulting se réserve le droit de modifier ces CGU en les mettant à jour à tout moment. La version des CGU qui est applicable entre vous et Système Solution Consulting est celle en vigueur au moment de votre connexion et de votre utilisation de l’Application. Nous vous conseillons donc de consulter cette page régulièrement afin de prendre connaissance des CGU en vigueur lorsque vous utilisez l’Application.

                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 2 – OBJET ET FONCTIONNALITES DE L’APPLICATION
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    <p className="text-sm text-gray-500">
                                                        L’Application vous permet de :
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            •   Visualiser en temps réel sur une carte en fonction de sa géolocalisation, l’état d’ouverture ou de fermeture du lieu de vente des clients de Système Solution Consulting ;
                                                        </li>
                                                        <li>
                                                            •   Pouvoir faire une recherche par catégorie et sous-catégorie proposée via l’application, afin de savoir quel est l’état d’ouverture ou de fermeture en temps réel des lieux de vente recherchés parmi ceux des clients de Système Solution Consulting ;
                                                        </li>
                                                        <li>
                                                            •   Avoir connaissance d’une présentation du lieu de vente avec un descriptif des services offerts, des horaires habituels d’ouverture sur l’application selon les indications données par les clients de Système Solution Consulting ;
                                                        </li>
                                                        <li>
                                                            •   Voir une photo du lieu de vente des clients de Système Solution Consulting qui apparaîtra dans les recherches des utilisateurs effectués via l’application ;
                                                        </li>
                                                        <li>
                                                            •   D’obtenir la création d’un itinéraire via Google Maps ou Waze pour l’utilisateur qui aura sélectionné le lieu de vente ouvert de son choix via l’application TOOF pour l’y guider ;
                                                            Ces fonctionnalités peuvent être enrichies ou modifiées à tout moment par Système Solution Consulting SAS sans que sa responsabilité ne puisse être engagée à ce titre.
                                                        </li>
                                                    </ul>

                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 3 - ACCES A L’APPLICATION
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    <p className="text-sm text-gray-500">
                                                        Pour accéder à l’Application, vous devez posséder un terminal mobile et un accès au réseau Internet. L’Application est téléchargeable gratuitement depuis les plateformes « Apple Store » et « Google Play Store » sur les terminaux mobiles suivants :
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            •   téléphone mobile Iphone® d’Apple® disposant du système d’exploitation iOS sous iOS 14.0 minimum                                                        </li>
                                                        <li>
                                                            •    téléphone mobile disposant du système d’exploitation Android® OREO (API 26) minimum. La version du logiciel de l’Application peut être mise à jour de temps à autre pour ajouter de nouvelles fonctions et de nouveaux services.
                                                        </li>

                                                    </ul>
                                                    Une fois l’Application installée sur votre terminal, actuellement, les utilisateurs pourront utiliser l’application sans avoir à se connecter et se faire connaître.
                                                    Si vous êtes un client référencé chez Système Solution Consulting SAS, vous aurez accès à votre espace client via l’application, mais également via le site internet mis à votre disposition.
                                                    Si vous ne faites pas encore partie de la communauté des clients de Système Solution Consulting SAS pour mettre en avant votre lieu de vente auprès de notre communauté d’utilisateur de l’application, n’hésitez pas à nous contacter pour profiter de tous les avantages de l’application TOOF éditée par Système Solution Consulting à cette adresse : contact@toof.fr
                                                    Vous vous engagez, lors de votre utilisation et navigation sur l’Application, à fournir des informations vraies, exactes et aussi complètes que possible lorsque celles-ci vous sont demandées. Vous vous engagez également à mettre à jour ces informations dans les meilleurs délais en cas de changement de celles-ci.
                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 4 – LICENCE D’UTILISATION
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Système Solution Consulting vous concède un droit personnel d’utilisation de l’Application et de son contenu. Ce droit est accordé à titre non exclusif, révocable, non cessible, non transférable, mondial et gratuit pour l’utilisateur non client professionnel et pour la seule utilisation de l’Application, à l’exclusion de toute autre finalité.
                                                    Il est strictement interdit d’accéder et/ou d’utiliser et/ou de tenter d’accéder ou d’utiliser les codes sources ou objets de l’Application.
                                                    Vous n’acquérez aucun droit de propriété intellectuelle sur l’Application ou son contenu, ni aucun autre droit que ceux conférés par les présentes CGU.

                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 5 - DONNÉES PERSONNELLES
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Les données personnelles utilisées sont principalement pour l’utilisateur vos coordonnés GPS lors de votre requête au serveur pour définir les lieux de vente ouvert ou fermé autour de ce dernier. Aucune donnée liée à leurs utilisations n’est stockée par l’application.
                                                    Les données personnelles des clients de Système Solution Consulting SAS pour mettre en avant leur lieu de vente auprès de notre communauté d’utilisateur de l’application sont notamment la dénomination sociale, dénomination commerciale, nom, prénom, fonction, adresse professionnelle, numéro de RCS, SIRET, numéro de téléphone, adresse mail, photo du lieu de vente, horaire d’ouverture et de fermetures, présentation du lieu de vente, etc.
                                                    Conformément à la réglementation applicable, l’utilisateur de l’application TOOF, tout comme le client de Système Solution Consulting dispose d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, et de portabilité des données le concernant, ainsi que du droit de s&apos;opposer au traitement pour motif légitime, droits qu&apos;il peut exercer en s&apos;adressant au responsable de traitement à l&apos;adresse postale suivante : Système solution consulting SAS – Monsieur le Responsable de traitement – 85 boulevard de Courcelles, 75008 PARIS, France ou par email à privacy@toof.fr . En cas de réclamation, le Client peut adresser une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés.

                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 6 - PROPRIÉTÉ INTELLECTUELLE
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    L&apos;ensemble du contenu de l’Application relève de la législation française, communautaire et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
                                                    Tous les droits de reproduction et de représentation afférents à l’Application sont réservés par Système Solution Consulting, y compris toutes représentations graphiques, iconographiques et photographiques, ce quel que soit le territoire de protection et que ces droits aient fait l&apos;objet d&apos;un dépôt ou non.
                                                    La reproduction et/ou représentation de tout ou partie de l’Application, quel que soit le support, en ce compris tous noms commerciaux, marques, logos, noms de domaine et autres signes distinctifs, est formellement interdite et constituerait une contrefaçon sanctionnée par le code de la propriété intellectuelle.
                                                    Les mots TOOF, « t’es ouvert ou fermé » et tous les logos sont des marques déposées par Système Solution Consulting SAS ou par son propriétaire qui en aura concédé licence d’exploitation à Système Solution Consulting SAS.

                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 7 – DISPONIBILITE DE L’APPLICATION
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    L’Application est accessible en ligne 7 jours sur 7 et 24 heures sur 24. Toutefois, compte tenu de la complexité du réseau internet et de l&apos;afflux, à certaines heures, des utilisateurs d&apos;internet, Système Solution Consulting SAS n&apos;offre aucune garantie de continuité du service et ne pourra voir sa

                                                    responsabilité engagée en cas d&apos;impossibilité temporaire d&apos;accéder en tout ou partie à l’Application. Aucun droit à indemnisation n’est accordé au titre du présent alinéa, ni à l’utilisateur, ni aux clients de Système Solution Consulting SAS qui par ce service souhaitent mettre en avant leur lieu de vente auprès de notre communauté d’utilisateur de l’application TOOF.

                                                    Système Solution Consulting SAS se réserve le droit de cesser, sans préavis, sans indemnité et à son entière discrétion, à titre définitif ou provisoire, de fournir tout ou partie du Service ou des fonctionnalités du Site.

                                                </p>


                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 8 - LIMITATION DE RESPONSABILITE – ABSENCE DE GARANTIE
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Système Solution Consulting SAS s&apos;engage à mettre en œuvre tous les moyens nécessaires afin d&apos;assurer au mieux l’accès à l’Application.
                                                    Vous êtes seul responsable de votre identifiant. Vous vous engagez à les garder confidentiels et à ne pas les transmettre à des tiers. Si vous avez connaissance d&apos;une utilisation non autorisée de votre compte, il vous appartient d&apos;en informer immédiatement Système Solution Consulting SAS en écrivant à l&apos;adresse suivante : contact@toof.fr
                                                    De manière générale, vous acceptez et reconnaissez que votre utilisation de l’Application, y compris les informations que vous diffusez, est faite sous votre unique et entière responsabilité.
                                                    En utilisant l’Application, vous vous engagez à ne pas agir de manière dommageable ou ayant pour effet de causer un préjudice à l’image, aux intérêts ou aux droits de Système Solution Consulting SAS, d’endommager ou de rendre inopérante l’Application.
                                                    Système Solution Consulting SAS ne saurait être tenue pour responsable et ne saurait être tenue de vous indemniser du préjudice direct ou indirect qui résulterait de l’indisponibilité de l’Application. Système Solution Consulting SAS ne saurait à cet égard être tenue pour responsable de tout dommage résultant de la perte, de l’altération ou de toute utilisation frauduleuse de données, de la transmission accidentelle de virus ou autres éléments nuisibles, de l’attitude ou comportement d’un tiers. Elle n’encourt aucune responsabilité du fait (i) de l’impossibilité d’accéder à l’Application,(ii) d’un mauvais usage de l’Application (iii) de la saturation du réseau internet, (iv) d’éventuels dysfonctionnements sur les terminaux mobiles utilisés par vous, (v) en cas de force majeure ou de fait indépendant de sa volonté.

                                                </p>


                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 9 - NON RENONCIATION
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Le fait pour l&apos;une des parties de ne pas se prévaloir d&apos;un manquement par l&apos;autre partie à l&apos;une quelconque des obligations visées dans les présentes CGU ne saurait être interprété pour l&apos;avenir comme une renonciation à l&apos;obligation en cause.
                                                </p>

                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 10 - DROIT APPLICABLE -LITIGES
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Les présentes CGU sont soumises au droit français.
                                                    Tout litige concernant l&apos;Application ou l’interprétation des présentes CGU sera soumis au tribunal compétent de PARIS.

                                                </p>


                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 11 - CONTACT
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Vous pouvez adresser vos questions ou remarques relatives aux présentes CGU à Système Solution Consulting SAS en écrivant à l&apos;adresse suivante: contact@toof.fr

                                                    POLITIQUE DE CONFIDENTIALITÉ ET DE PROTECTION DES DONNÉES PERSONNELLES
                                                    Novembre 2023
                                                </p>
                                                <p className='text-sm text-gray-500'>
                                                    •	Déclaration générale
                                                </p>
                                                <p className='text-sm text-gray-500'>
                                                    Nous prenons votre vie privée très au sérieux et nous nous engageons à la protéger. Nous considérons que vous devez pouvoir facilement savoir quelles sont les données à caractère personnel que nous recueillons et utilisons, et comprendre vos droits en lien avec celles-ci.
                                                    La présente politique de confidentialité (la « Politique de confidentialité ») explique nos politiques et pratiques quant à la manière dont nous recueillons, utilisons et divulguons les données à caractère personnel que nous recueillons sur nos plateformes numériques ou pendant nos événements.
                                                    Nous vous recommandons de lire attentivement la présente Politique de confidentialité car elle contient des informations importantes sur vos données à caractère personnel.
                                                    Vous pouvez imprimer le texte intégral de notre Politique de confidentialité en cliquant ici.
                                                    N’hésitez pas à nous contacter si vous avez des questions ou des remarques sur notre Politique de confidentialité (voir la rubrique « Comment nous contacter » ci-dessous).

                                                </p>
                                                <p className='text-sm text-gray-500'>
                                                    •	Qui sommes-nous ?
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Les termes « Système Solution Consulting », « TOOF », « nous », « notre » et « nos » désignent la société Système Solution Consulting SAS en tant que responsable du traitement de vos données à caractère personnel, sauf indication contraire dans notre Politique de confidentialité.
                                                    La société Système Solution Consulting SAS est une société commerciale inscrite près le RCS du tribunal de commerce de PARIS et ayant notamment pour objet le conseil, le développement et l’exploitation d’application informatique, web et mobile. Notre siège social se situe 85 boulevard de Courcelles – 75008 PARIS.
                                                    Vous trouverez nos coordonnées dans la rubrique « Comment nous contacter » ci-dessous.
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Quelles sont les données à caractère personnel que nous recueillons et comment sont-elles recueillies ?
                                                    Les données à caractère personnel sont des informations relatives à une personne physique identifiée ou identifiable. Elles incluent par exemple le nom, l’adresse et le genre d’une personne. Nous pouvons recueillir des données à caractère personnel directement auprès de vous (par exemple lorsque vous nous contactez par email, lorsque vous contractez en tant que client) ou indirectement (par exemple à partir de vos appareils électroniques qui interagissent avec notre site Internet (voir notre « Politique des Cookies » ci-dessous).


                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Données que vous nous fournissez directement

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Vous pouvez nous fournir des données :

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	lorsque vous vous abonnez à notre lettre d’information via notre site internet ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	lorsque vous nous contactez via notre module de contact mis en ligne sur notre site internet ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	lorsque vous souscrivez à notre offre de service en tant que client ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	lorsque vous accédez à l’espace professionnel de notre site internet. Selon ce que vous nous fournissez, lesdites informations peuvent inclure :

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	votre identité (y compris votre prénom, nom de famille, genre, image) ;


                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	vos coordonnées (y compris votre (vos) adresse(s) postale(s), e-mail(s), numéro(s) de téléphone) ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	votre statut personnel (y compris votre titre de civilité) ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	d’autres informations que vous pouvez fournir en remplissant des formulaires ou en nous contactant (y compris vos commentaires ou d’autres communications avec nous).

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	certaines données de paiement (tel que des coordonnées bancaires aux fins de règlement de nos prestations) ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                Nous vous informerons lorsque vos informations sont nécessaires pour traiter votre demande, pour répondre à vos demandes ou pour vous permettre de participer à l’un de nos programmes. Si vous ne donnez pas ces informations, cela peut retarder ou rendre impossible le traitement de votre demande.

                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Nous nous efforçons de veiller à ce que les données à caractère personnel que nous détenons soient exactes à tout moment. Nous vous encourageons donc à mettre à jour vos données au cas où des changements se produiraient. Nous pouvons également vous demander de mettre à jour vos données de temps à autre.

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Nous vous recommandons de ne fournir que les données demandées ou nécessaires à votre requête, et de ne pas nous communiquer de données sensibles relatives à la race, à l’origine ethnique, aux opinions politiques, aux croyances religieuses ou philosophiques, et des données concernant la santé, la vie sexuelle ou l’orientation sexuelle.

                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    •	Données recueillies indirectement

                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Nous pouvons recueillir des données lorsque vous utilisez notre site, notamment votre adresse IP ou d’autres données de navigation (y compris le navigateur, le système d’exploitation, le modèle de l’appareil), par le biais de cookies ou de technologies similaires placés sur votre appareil. Certains cookies sont nécessaires au bon fonctionnement de notre site et d’autres sont utilisés à des fins d’analyse qui nous aident à vous fournir des services plus personnalisés et une meilleure expérience numérique. Pour plus d’informations sur les cookies et pour savoir comment modifier vos préférences, veuillez lire notre Politique en matière de cookies sur notre site internet.
                                                    Si vous nous fournissez des données à caractère personnel concernant quelqu’un d’autre, vous devez vous assurer que vous avez le droit de nous divulguer ces données et que, sans que nous prenions d’autres mesures imposées par la législation en matière de protection des données, nous pouvons recueillir, utiliser et divulguer lesdites données pour les finalités décrites dans notre Politique de confidentialité. Vous devez par exemple vous assurer que la personne concernée a connaissance des divers sujets exposés dans notre Politique de confidentialité. La personne doit également donner les consentements énoncés dans notre Politique de confidentialité en ce qui concerne la manière dont nous traitons ses données à caractère personnel.

                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    Nous vous rappelons que nous ne recueillons pas, directement ou indirectement, de données à caractère personnel de personnes âgées de moins de 16 ans, sans préjudice de toute loi locale fixant un âge minimum différent. Nous vous demandons donc de ne pas nous fournir de données à caractère personnel de personnes ne remplissant pas ce critère.

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Pourquoi recueillons-nous vos données à caractère personnel et comment les utilisons- nous ?

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Nous recueillons et utilisons vos données à caractère personnel en nous fondant sur une ou plusieurs des bases juridiques suivantes :

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	nous avons obtenu votre consentement préalable (par exemple lorsque vous vous abonnez à notre lettre d’information). Veuillez noter qu’avec cette base juridique particulière, vous avez le droit de révoquer votre consentement à tout moment (voir ci-dessous « Quels sont vos droits sur vos données à caractère personnel ? ») ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	le traitement est nécessaire dans le cadre d’un contrat entre la société Système Solution Consulting et vous ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	nous avons un intérêt légitime pour effectuer le traitement et cet intérêt légitime n’est pas éclipsé par vos intérêts, droits fondamentaux ou libertés ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	nous devons traiter vos données à caractère personnel afin de respecter les lois et la règlementation en vigueur.

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Selon le contexte, nous pouvons utiliser vos données à caractère personnel pour :

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	effectuer des vérifications pour vous identifier et vérifier votre identité ;

                                                </p>


                                                <p className="text-sm text-gray-500">
                                                    •	répondre à vos questions, demandes et suggestions ;


                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	surveiller et améliorer nos Plateformes numériques ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	effectuer des analyses statistiques ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	fournir des informations aux organismes de réglementation lorsque la loi l’exige.

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Combien de temps conservons-nous vos données à caractère personnel ?

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Vos données à caractère personnel sont traitées pendant la période nécessaire pour les finalités pour lesquelles elles ont été recueillies, pour se conformer aux obligations légales et réglementaires et pour la durée de toute période nécessaire à l’établissement, l’exercice ou la défense de droits légaux.

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Afin de déterminer les durées de conservation les plus appropriées pour vos données à caractère personnel, nous avons spécifiquement pris en compte la quantité, la nature et la sensibilité de vos données à caractère personnel, les raisons pour lesquelles nous avons recueilli vos données à caractère personnel, ainsi que les exigences légales applicables. Par exemple :

                                                </p>
                                                <p className="text-sm text-gray-500">

                                                    •	En ce qui concerne les destinataires de la lettre d’information : vos données sont conservées pendant trois ans à compter de votre dernière action, puis supprimées ;
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    •	Comment divulguons-nous et transférons-nous vos données à caractère personnel ?

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Nous ne pouvons divulguer vos données à caractère personnel qu’aux parties désignées ci- dessous et pour les raisons suivantes :

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Nous divulguons vos données à caractère personnel aux employés de Système Solution Consulting SAS qui ont besoin d’avoir accès à vos données à caractère personnel et qui sont autorisés à les traiter pour les finalités susmentionnées et qui s’engagent à en respecter la confidentialité.

                                                </p>
                                                <p className="text-sm text-gray-500">

                                                    •	Nous pouvons également être amenés à communiquer des données à caractère personnel à des tiers agissant pour le compte de Système Solution Consulting SAS et agréés par Système Solution Consulting SAS. Tous ces traitements sont basés sur nos instructions préalables énoncées dans un contrat contraignant qui est conforme aux exigences de la loi applicable. Lesdites divulgations sont faites pour des motifs différents, notamment :
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	Le développement, l’assistance informatiques et l’envoi d’emails ;

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    •	La gestion comptable, l’envoi des factures, etc.

                                                </p><p className="text-sm text-gray-500">
                                                    Ces tiers s’engagent à respecter la confidentialité et ne sont pas autorisés à utiliser vos données à caractère personnel pour toute autre finalité. Nous leur imposons également l’application de mesures de sécurité appropriées pour protéger vos données à caractère personnel.
                                                    Une partie de ces tiers peuvent être situés en dehors de votre pays, et plus exactement en dehors de l’Union Européenne (« UE »). Nous avons pris des mesures pour nous assurer que toutes les données à caractère personnel sont protégées de manière adéquate et que tous les transferts de données à caractère personnel, y compris en dehors de l’UE, sont effectués légalement. Lorsque nous transférons des données à caractère personnel en dehors de l’UE vers un pays qui n’est pas désigné par la Commission européenne comme assurant un niveau suffisant de protection des données à caractère personnel, les transferts se feront dans le cadre d’un accord qui couvre les obligations imposées par l’UE pour le transfert de données à caractère personnel en dehors de l’UE, notamment les clauses contractuelles types approuvées par la Commission européenne, ou dans le cadre d’autres garanties appropriées.
                                                    Pour obtenir une description des mesures de protection appropriées, vous pouvez nous envoyer votre demande en utilisant les données de la rubrique « Comment nous contacter ? » ci-dessous.
                                                </p><p className="text-sm text-gray-500">
                                                    •	Nous pouvons être tenus par les dispositions obligatoires d’une loi applicable ou dans le cadre d’une procédure judiciaire ou autre demande légale, de divulguer vos données à caractère personnel à des autorités ou à des tiers.

                                                </p><p className="text-sm text-gray-500">
                                                    •	Nous pouvons également divulguer ou traiter vos données à caractère personnel conformément à la loi applicable pour défendre nos intérêts légitimes (par exemple dans le cadre d’une procédure civile ou pénale).

                                                </p><p className="text-sm text-gray-500">
                                                    •	Comment protégeons-nous vos données à caractère personnel ?

                                                </p><p className="text-sm text-gray-500">
                                                    Toutes vos données à caractère personnel sont strictement confidentielles et ne seront accessibles qu’en cas de nécessité, uniquement par le personnel de Système Solution Consulting SAS, et le cas échéant par le personnel dument autorisé des sous-traitants ou prestataires indépendants agissant en notre nom dans le cadre de mesures de sécurité techniques et organisationnelles appropriées.
                                                    La société Système Solution Consulting SAS a mis en place des mesures de sécurité pour protéger vos données à caractère personnel contre tout accès et utilisation non autorisés. Nous suivons des procédures de sécurité appropriées dans la conservation et la divulgation de vos données à caractère personnel afin d’empêcher l’accès non autorisé par des tiers et d’éviter la perte accidentelle de vos données. Nous limitons l’accès à vos données à caractère personnel aux personnes qui ont réellement besoin d’y accéder pour des raisons professionnelles. Les personnes qui accèdent à vos données sont soumises à un devoir de confidentialité à l’égard de Système Solution Consulting SAS.
                                                    Nous avons également mis en place des procédures pour traiter toute atteinte présumée à la sécurité des données. Nous vous aviserons, ainsi que toute autorité de contrôle compétente, en cas d’atteinte présumée à la sécurité des données lorsque la loi nous impose de le faire.


                                                </p><p className="text-sm text-gray-500">
                                                    Nous exigeons également des personnes à qui nous transmettons vos données à caractère personnel qu’elles respectent ce qui précède. Malheureusement, la transmission d’informations via Internet n’est pas totalement sécurisée. Nous ne pouvons donc pas garantir la sécurité de vos données à caractère personnel que vous nous avez transmises via Internet. Une telle transmission se fait à vos propres risques et vous reconnaissez et acceptez que nous déclinons toute responsabilité en cas d’utilisation, de distribution, de dommage ou de destruction non autorisés de vos données, sauf dans la mesure où la loi nous oblige à endosser une telle responsabilité. Une fois que nous aurons reçu vos données à caractère personnel, nous appliquerons les mesures de sécurité susmentionnées.

                                                </p><p className="text-sm text-gray-500">
                                                    •	Quels sont vos droits sur vos données à caractère personnel ?

                                                </p><p className="text-sm text-gray-500">
                                                    Conformément au droit applicable à la protection des données, vous pouvez à tout moment demander l’accès, la rectification, l’effacement et la portabilité de vos données à caractère personnel, ou en restreindre le traitement ou vous y opposer. Un résumé de ces droits est énoncé ci-dessous :
                                                    Votre droit d’accès : le droit de recevoir une copie de vos données à caractère personnel.
                                                </p><p className="text-sm text-gray-500">
                                                    Votre droit de rectification : le droit de nous demander de rectifier toute erreur dans vos données ou de les compléter.

                                                </p><p className="text-sm text-gray-500">
                                                    Votre droit à l’oubli : le droit de nous demander de supprimer vos données à caractère personnel, dans certaines situations.

                                                </p><p className="text-sm text-gray-500">
                                                    Votre droit à la limitation du traitement : le droit de nous demander de limiter le traitement de vos données à caractère personnel, dans certaines circonstances, par exemple si vous contestez l’exactitude des données.

                                                </p><p className="text-sm text-gray-500">
                                                    Votre droit à la portabilité des données : le droit de recevoir les données à caractère personnel que vous nous avez fournies, dans un format structuré, couramment utilisé et lisible par machine et/ou de transmettre ces données à un tiers, dans certaines situations.

                                                </p><p className="text-sm text-gray-500">
                                                    Votre droit d’opposition au traitement : le droit de s’opposer :

                                                </p><p className="text-sm text-gray-500">
                                                    •	à tout moment pendant le traitement de vos données à caractère personnel;

                                                </p><p className="text-sm text-gray-500">
                                                    •	dans certaines autres situations, à la poursuite de notre traitement de vos données à caractère personnel, par exemple le traitement effectué sur la base de nos intérêts légitimes.

                                                </p><p className="text-sm text-gray-500">
                                                    Lorsque le traitement de vos données personnelles est basé sur votre consentement, vous pouvez à tout moment décider de retirer votre consentement au traitement de vos données à caractère personnel notamment lorsque vous ne souhaitez plus recevoir la lettre
                                                    d’information à laquelle vous vous êtes inscrit. Si votre consentement est retiré, cela ne nous empêche pas de traiter vos données à caractère personnel en nous fondant sur d’autres bases juridiques, le cas échéant, l’intérêt légitime de la société Système Solution Consulting SAS
                                                    Si vous ne souhaitez plus recevoir nos informations par mail, nous vous rappelons que vous pouvez révoquer votre consentement à tout moment directement à partir du lien de désabonnement inclus dans chaque message électronique que nous vous envoyons. Si vous le faites, nous mettrons rapidement à jour nos bases de données et prendrons toutes les mesures raisonnables pour répondre à votre demande le plus rapidement possible.
                                                    Vous avez également le droit de déposer une plainte auprès de votre autorité locale de protection des données en cas de violation présumée des règles de protection des données qui vous sont applicables. Pour exercer l’un de ces droits, veuillez nous contacter en utilisant les coordonnées ci- dessous (voir « Comment nous contacter »).
                                                    Veuillez noter que si vous exercez l’un des droits mentionnés ci-dessus, il vous sera demandé de nous faire savoir quel droit vous souhaitez exercer et de nous fournir certaines informations (copie d’une carte d’identité, passeport ou autre pièce d’identité légalement reconnue) à des fins d’identification pour traiter votre demande et vous protéger contre les demandes frauduleuses émanant de tiers.

                                                </p><p className="text-sm text-gray-500">
                                                    •	Comment nous contacter ?

                                                </p><p className="text-sm text-gray-500">
                                                    Pour toute question relative à vos données, pour révoquer votre consentement, pour poser des questions d’ordre général ou pour porter réclamation, veuillez communiquer avec nos équipes :

                                                </p><p className="text-sm text-gray-500">
                                                    •	Par courrier : Société Système Solution Consulting SAS, 85 bd de Courcelles,75008 Paris

                                                </p><p className="text-sm text-gray-500">
                                                    •	Sur le site internet de la société : via le formulaire de contact prévu à cet effet (www.toof.fr )

                                                </p><p className="text-sm text-gray-500">
                                                    Pour les questions ayant précisément trait aux e-mails, nous vous rappelons que vous pouvez à tout moment vous désinscrire directement par le lien de « désabonnement » contenu dans tous les e-mails que nous vous envoyons.


                                                </p><p className="text-sm text-gray-500">
                                                    Si vous avez des questions ou des préoccupations concernant notre Politique de confidentialité ou le traitement des données, vous pouvez contacter le délégué à la protection des données du groupe à l’adresse suivante : privacy@toof.fr

                                                </p><p className="text-sm text-gray-500">
                                                    •	Modifications de notre Politique de confidentialité

                                                </p><p className="text-sm text-gray-500">

                                                    Notre politique de confidentialité reflète nos pratiques actuelles et peut être modifiée et mise à jour de temps à autre. Lorsque nous publions des changements à notre Politique de confidentialité, nous modifions la « Date d’effet » précisée en haut de ce document pour indiquer quand de tels changements sont entrés en vigueur.
                                                    Si nous modifions notre Politique de confidentialité d’une manière substantielle, nous vous en informerons par le biais d’un avis de modification lors de la connexion à l’application TOOF et sur la page d’accueil du site Web « www.toof.fr ».

                                                </p><p className="text-sm text-gray-500">
                                                    CONDITIONS GENERALES DE VENTE (PRESTATIONS DE SERVICE) ENTRE PROFESSIONNELS

                                                </p><p className="text-sm text-gray-500">
                                                    CONDITIONS GENERALES DE VENTE (PRESTATIONS DE SERVICE) ENTRE PROFESSIONNELS

                                                </p><p className="text-sm text-gray-500">

                                                </p><p className="text-sm text-gray-500">

                                                </p><p className="text-sm text-gray-500">

                                                </p><p className="text-sm text-gray-500">

                                                </p><p className="text-sm text-gray-500">

                                                </p>



                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 1 - Champ d&apos;application
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Les présentes Conditions Générales de Vente constituent, conformément à l&apos;article L 441-1 du Code du Commerce, le socle unique de la relation commerciale entre les parties.
                                                    Elles ont pour objet de définir les conditions dans lesquelles Système Solution Consulting SAS (« Le Prestataire ») fournit aux Clients professionnels (« Les Clients ou le Client ») qui lui en font la demande, via le site internet du Prestataire, par contact direct ou via un support papier, les services suivants : l&apos;application TOOF (« l’application) qui a pour objet de permettre aux utilisateurs de l&apos;application de connaître en temps réel en fonction de leur géolocalisation si le lieu de vente du client est ouvert ou fermé à la clientèle.
                                                    Pour ce faire, le prestataire assure les services suivants au client :
                                                </p>


                                                <p className="text-sm text-gray-500">
                                                    •	Mise en ligne du lieu de vente du client sur l’application ;

                                                </p><p className="text-sm text-gray-500">
                                                    •	Présentation du lieu de vente du client avec un descriptif des services offerts, des horaires habituels d’ouverture sur l’application selon les indications données par le client lui-même qui les renseignera via le site internet réservé aux clients de l’application ;

                                                </p><p className="text-sm text-gray-500">
                                                    •	Photo du lieu de vente du client qui apparaîtra dans les recherches des utilisateurs effectués via l’application selon les indications données par le client lui-même qui les renseignera via le site internet réservé aux clients de l’application ;

                                                </p><p className="text-sm text-gray-500">
                                                    •	Etat d’ouverture ou de fermeture en temps réel du lieu de vente du client avec indication de cette donnée en temps réel sur la carte de l’application selon les informations que le client communiquera au prestataire via son application ;

                                                </p><p className="text-sm text-gray-500">
                                                    •	Création d’un itinéraire via google Maps ou Waze pour l’utilisateur qui aura sélectionné le client ouvert via l’application TOOF pour le guider jusqu’à lui ;

                                                </p><p className="text-sm text-gray-500">
                                                    •	Et tout autre fonctionnalité à venir. (« les Services »).

                                                </p><p className="text-sm text-gray-500">
                                                    Elles s&apos;appliquent, sans restriction ni réserve, à tous les Services rendus par le Prestataire auprès des Clients de même catégorie, quelles que soit les clauses pouvant figurer sur les documents du Client, et notamment ses conditions générales d&apos;achat.
                                                    Conformément à la réglementation en vigueur, ces Conditions Générales de Vente sont systématiquement communiquées à tout Client (hors grossistes) qui en fait la demande, pour lui permettre de passer commande auprès du Prestataire. Elles sont également communiquées à tout Client préalablement à la conclusion d&apos;une convention unique visée aux articles L 441-3 et suivants du Code du Commerce, dans les délais légaux.
                                                    Toute commande de Services implique, de la part du Client, l&apos;acceptation des présentes Conditions Générales de Vente et des conditions générales d&apos;utilisation du site internet du Prestataire pour les commandes électroniques.
                                                    Les renseignements figurant sur les catalogues, prospectus et tarifs du Prestataire sont donnés à titre indicatif et sont révisables à tout moment.
                                                    Le Prestataire est en droit d&apos;y apporter toutes modifications qui lui paraîtront utiles.
                                                </p>
                                                <br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 2 - Commandes 2-1

                                                </p><p className="text-sm text-gray-500">
                                                    Les ventes de Services ne sont parfaites qu’après acceptation expresse et par écrit de la commande du Client par le Prestataire, matérialisée par un accusé de réception émanant du Prestataire.


                                                </p><p className="text-sm text-gray-500">
                                                    Le Prestataire dispose de moyens de commande (y compris d&apos;acceptation et de confirmation) électroniques (www.toof.fr ) permettant aux Clients de commander les Services dans les meilleures conditions de commodité et de rapidité.
                                                    Pour les commandes passées exclusivement sur internet, l&apos;enregistrement d&apos;une commande sur le site du Prestataire est réalisé lorsque le Client accepte les présentes Conditions Générales de Vente en cochant la case prévue à cet effet et valide sa commande. Le Client a la possibilité de vérifier le détail de sa commande, son prix total et de corriger d&apos;éventuelles erreurs avant de confirmer son acceptation (article 1127-2 du Code Civil). Cette validation implique l&apos;acceptation de l&apos;intégralité des présentes Conditions Générales de Vente et constituent une preuve du contrat de vente.
                                                    La prise en compte de la commande et l&apos;acceptation de celle-ci sont confirmées par l&apos;envoi d&apos;un mail. Les données enregistrées dans le système informatique du Prestataire constituent la preuve de l&apos;ensemble des transactions conclues avec le Client.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    2-2

                                                </p><p className="text-sm text-gray-500">
                                                    Les éventuelles modifications de la commande demandées par le Client ne seront prises en compte, dans la limite des possibilités du Prestataire, que si elles sont notifiées par écrit, 8 jours au moins avant la date prévue pour la fourniture de Services commandés, après signature par le Client d&apos;un bon de commande spécifique et ajustement éventuel du prix.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    2-3

                                                </p><p className="text-sm text-gray-500">
                                                    En cas d&apos;annulation de la commande par le Client après son acceptation par le Prestataire moins de 5 jours avant la date prévue pour la fourniture des Services commandés, pour quelque raison que ce soit hormis la force majeure, l&apos;acompte versé à la commande, tel que défini à l&apos;article “ Conditions de règlement-Délais de règlement ” des présentes Conditions Générales de Vente sera de plein droit acquis au Prestataire et ne pourra donner lieu à un quelconque remboursement

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 3 - Tarifs

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    3-1


                                                </p><p className="text-sm text-gray-500">
                                                    Les prestations de services sont fournies aux tarifs du Prestataire en vigueur au jour de la passation de la commande, selon le barème du Prestataire, comme indiqué à l&apos;article “ Commandes ” ci-dessus.
                                                    Les tarifs s&apos;entendent nets et HT.
                                                    Une facture est établie par le Prestataire et remise au Client lors de chaque fourniture de Services.
                                                    Les conditions de détermination du coût des services dont le prix ne peut être connu a priori ni indiqué avec exactitude, ainsi que la méthode de calcul du prix permettant de vérifier ce dernier, seront communiquées au Client ou feront l&apos;objet d&apos;un devis détaillé, à la demande du Client conformément aux dispositions de l&apos;article L 441-1, III du Code de commerce.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 4 - Conditions de règlement 4-1 . Délais de règlement

                                                </p><p className="text-sm text-gray-500">
                                                    Le prix est payable comptant, en totalité au jour de la fourniture des Services commandés, dans les conditions définies à l&apos;article «Modalités de fourniture des Services» ci-après, et comme indiqué sur la facture remise au Client.
                                                    Les modes de paiement sécurisés suivants sont utilisés :
                                                </p><p className="text-sm text-gray-500">
                                                    •	par cartes bancaires : Visa, MasterCard, American Express, autres cartes bleues

                                                </p><p className="text-sm text-gray-500">
                                                    •	par prélèvement bancaire.

                                                </p><p className="text-sm text-gray-500">
                                                    Aucun frais supplémentaire, supérieur aux coûts supportés par le Prestataire pour l&apos;utilisation d&apos;un moyen de paiement ne pourra être facturé au Client.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    4-2 . Pénalités de retard – Indemnité forfaitaire de recouvrement

                                                </p><p className="text-sm text-gray-500">
                                                    En cas de retard de paiement et de versement des sommes dues par le Client au-delà du délai ci-dessus fixé, et après la date de paiement figurant sur la facture adressée à celui-ci, des pénalités de retard calculées selon le taux directeur (taux de refinancement ou Refi) semestriel de la Banque centrale européenne (BCE), en vigueur au 1er janvier ou au 1er juillet, majoré de 10 points. Ce taux étant appliqué sur le montant TTC du prix des Services figurant sur ladite facture. Le taux annuel ainsi

                                                </p><p className="text-sm text-gray-500">
                                                    déterminé pourra être converti en taux journalier. Il est alors multiplié par le nombre de jours écoulés entre la date d&apos;échéance et la date d&apos;encaissement (ou la date à laquelle est fait le calcul, si le paiement n&apos;est pas encore effectué). Ces pénalités de retard seront automatiquement et de plein droit acquises au Prestataire, sans formalité aucune ni mise en demeure préalable.
                                                    Une indemnité forfaitaire de 40 € est due au créancier pour frais de recouvrement, à l&apos;occasion de tout retard de paiement. Ce montant forfaitaire s&apos;ajoute aux pénalités de retard, mais n&apos;est pas inclus dans la base de calcul des pénalités. Si les frais de recouvrement réellement engagés sont supérieurs à ce montant forfaitaire, une indemnisation complémentaire sur justification peut être demandée. C&apos;est notamment le cas pour le recours à un cabinet chargé des relances et mises en demeure. Comme pour les pénalités de retard, l&apos;indemnité est due dès le lendemain de la date d&apos;échéance et n&apos;est pas soumise à TVA. L&apos;indemnité est due en totalité même en cas de paiement partiel de la facture à l&apos;échéance, quelle que soit la durée du retard (elle n&apos;est pas due pour chaque jour de retard).
                                                    L&apos;indemnité s&apos;applique à chaque facture payée en retard, et non à l&apos;ensemble des factures concernées. Elle est due par facture.
                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    4-3 . Absence de compensation

                                                </p><p className="text-sm text-gray-500">
                                                    Sauf accord exprès, préalable et écrit du Prestataire, et à condition que les créances et dettes réciproques soient certaines, liquides et exigibles, aucune compensation ne pourra être valablement effectuée par le Client entre d&apos;éventuelles pénalités pour retard dans la fourniture des Services commandés ou non-conformité à la commande, d&apos;une part, et les sommes par le Client au Prestataire au titre de l&apos;achat desdits Services, d&apos;autre part.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 5 - Modalités de fourniture des Services

                                                </p><p className="text-sm text-gray-500">
                                                    Les Services demandés par le Client seront fournis dans un délai maximum de 15 jours à compter de la réception par le Prestataire du bon de commande correspondant dûment signé, accompagné de l&apos;acompte exigible.
                                                    Ce délai ne constitue pas un délai de rigueur et le Prestataire ne pourra voir sa responsabilité engagée à l&apos;égard du Client en cas de retard dans la fourniture des Services n&apos;excédant pas 45 jours. En cas de retard supérieur à 2 mois, le Client pourra demander la résolution de la vente. Les acomptes déjà versés lui seront alors restitués par le Prestataire.
                                                    La responsabilité du Prestataire ne pourra en aucun cas être engagée en cas de retard ou de suspension de la fourniture de la prestation imputable au Client, ou en cas de force majeure
                                                    Les Services seront fournis depuis le siège social du prestataire ou depuis le lieu où sont hébergé ses serveurs en charge de la gestion de l’application et du site internet.
                                                    A défaut de réserves ou réclamations expressément émises par le Client lors de la réception des Services, ceux-ci seront réputés conformes à la commande, en quantité et qualité.
                                                    Le Client disposera d&apos;un délai de 8 jours à compter de la fourniture des Services pour émettre, par écrit, de telles réserves ou réclamations, avec tous les justificatifs y afférents, auprès du Prestataire.
                                                    Aucune réclamation ne pourra être valablement acceptée en cas de non-respect de ces formalités et délais par le Client.
                                                    Le Prestataire remboursera ou rectifiera le Client (dans la mesure du possible) dans les plus brefs délais et à ses frais, selon les modalités adéquates et agréées par le Client, les Services dont le défaut de conformité aura été dûment prouvé par le Client.
                                                    En cas de demande particulière du Client concernant les conditions de fourniture des Services, dûment acceptées par écrit par le Prestataire, les coûts y liés feront l&apos;objet d&apos;une facturation spécifique complémentaire, sur devis préalablement accepté par le Client.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 6 - Responsabilité du Prestataire - Garantie

                                                </p><p className="text-sm text-gray-500">
                                                    Le Prestataire garantit, conformément aux dispositions légales, le Client, contre tout défaut de conformité des Services et tout vice caché, provenant d&apos;un défaut de conception ou de fourniture desdits Services à l&apos;exclusion de toute négligence ou faute du Client.

                                                </p><p className="text-sm text-gray-500">
                                                    La responsabilité du Prestataire ne peut être engagée qu&apos;en cas de faute ou de négligence prouvée et est limitée aux préjudices directs à l&apos;exclusion de tout préjudice indirect, de quelque nature que ce soit.
                                                    L’Application est accessible en ligne 7 jours sur 7 et 24 heures sur 24. Toutefois, compte tenu de la complexité du réseau internet et de l&apos;afflux, à certaines heures, des utilisateurs d&apos;internet, Système Solution Consulting SAS n&apos;offre aucune garantie de continuité du service et ne pourra voir sa responsabilité engagée en cas d&apos;impossibilité temporaire d&apos;accéder en tout ou partie à l’Application. Aucun droit à indemnisation n’est accordé au titre du présent alinéa, ni à l’utilisateur, ni aux clients de Système Solution Consulting SAS qui par ce service souhaitent mettre en avant leur lieu de vente auprès de notre communauté d’utilisateur de l’application TOOF.
                                                    Il relève de la seule responsabilité du client, de vérifier l’exactitude des informations qu’il souhaitera voir afficher dans l’application (texte de présentation, photos, horaires habituelles), étant précisé que le client fournira seul et sous sa seule autorité et responsabilité ces informations aux prestataires via le site internet et son espace client auquel il a accès. Conformément aux dispositions de l’article 6 de la Loi de la n° 2004-575 du 21 juin 2004 pour la confiance dans l&apos;économie numérique, le client s’engage à ce que les informations et visuels qu’il communiquera via son espace professionnel aux fins de publication dans l’application mobile TOOF soit conformes aux règlements, lois en vigueur et ne contreviennent pas aux bonnes mœurs et à la morale, ne constitue pas un trouble manifeste à l’ordre public (incitation à la haine, racisme, injure, atteinte à la vie privée, publication d’image pornographique ou pédopornographique, etc...). En effet, le prestataire n’a pas la capacité technique de procéder à un contrôle avant mise en ligne qui se fait sous la seule et entière responsabilité du client. Tout manquement à ce titre qui serait porté à la connaissance du prestataire entrainera de sa part la suspension immédiate des publications litigieuses dans un délai raisonnable. Le prestataire pourra également procéder à la résiliation immédiate du contrat liant le prestataire et le client fautif, sans remboursement des sommes déjà versé par ce dernier qui resteront acquise à titre de clause pénale.
                                                    De même, il relève de la seule responsabilité du client d’indiquer via l’application son statut « ouvert » ou « fermé » afin d’informer la communauté des utilisateurs de l’application. Une absence de modification du statut « ouvert » ou « fermé » par le client ne pourra en aucun manière être reprochée au prestataire.
                                                    Afin de faire valoir ses droits, le Client devra, sous peine de déchéance de toute action s&apos;y rapportant, informer le Prestataire, par écrit, de l&apos;existence des vices dans un délai maximum de 8 jours à compter de leur découverte.
                                                    Le Prestataire rectifiera ou fera rectifier, à ses frais exclusifs, selon les modalités adéquates et agréées par le Client, les Services jugés défectueux.
                                                    En tout état de cause, au cas où la responsabilité du Prestataire serait retenue, la garantie du Prestataire serait limitée au montant HT payé par le Client pour la fourniture des Services à compter du mois où il fera connaître sa faute ou négligence.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 7 - Droit de propriété intellectuelle

                                                </p><p className="text-sm text-gray-500">
                                                    Le Prestataire reste propriétaire de tous les droits de propriété intellectuelle sur les études, dessins, modèles, prototypes, etc, réalisés (même à la demande du Client) en vue de la fourniture des services au Client. Le Client s&apos;interdit donc toute reproduction ou exploitation desdites études, dessins, modèles et prototypes, etc, sans l&apos;autorisation expresse, écrite et préalable du Prestataire qui peut la conditionner à une contrepartie financière.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 8 - Données personnelles

                                                </p><p className="text-sm text-gray-500">
                                                    Les données personnelles recueillies auprès des Clients font l&apos;objet d&apos;un traitement informatique réalisé par le Fournisseur. Elles sont enregistrées dans son fichier Clients et sont indispensables au traitement de sa commande. Ces informations et données personnelles sont également conservées à des fins de sécurité, afin de respecter les obligations légales et réglementaires. Elles seront conservées aussi longtemps que nécessaire pour l&apos;exécution des commandes et des garanties éventuellement applicables.

                                                </p><p className="text-sm text-gray-500">
                                                    Le responsable du traitement des données est le Fournisseur. L&apos;accès aux données personnelles sera strictement limité aux employés du responsable de traitement, habilités à les traiter en raison de leurs fonctions. Les informations recueillies pourront éventuellement être communiquées à des tiers liés à l&apos;entreprise par contrat pour l&apos;exécution de tâches sous-traitées, sans que l&apos;autorisation du Client soit nécessaire.
                                                    Dans le cadre de l&apos;exécution de leurs prestations, les tiers n&apos;ont qu&apos;un accès limité aux données et ont l&apos;obligation de les utiliser en conformité avec les dispositions de la législation applicable en matière de protection des données personnelles. En dehors des cas énoncés ci-dessus, le Fournisseur s&apos;interdit de vendre, louer, céder ou donner accès à des tiers aux données sans consentement préalable du Client, à moins d&apos;y être contrainte en raison d&apos;un motif légitime.
                                                    Si les données sont amenées à être transférées en dehors de l&apos;UE, le Client en sera informé et les garanties prises afin de sécuriser les données (par exemple, adhésion du prestataire externe au « Privacy Shield », adoption de clauses types de protection validées par la CNIL, adoption d&apos;un code de conduite, obtention d&apos;une certification CNIL, etc.) lui seront précisées.
                                                    Conformément à la réglementation applicable, le client dispose d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, et de portabilité des données le concernant, ainsi que du droit de s&apos;opposer au traitement pour motif légitime, droits qu&apos;il peut exercer en s&apos;adressant au responsable de traitement à l&apos;adresse postale suivante : Système solution consulting SAS – Monsieur le Responsable de traitement – 85 boulevard de Courcelles, 75008 PARIS, France ou par email à privacy@toof.fr. En cas de réclamation, le Client peut adresser une réclamation auprès de la Commission Nationale de l&apos;Informatique et des Libertés.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 9 - Imprévision

                                                </p><p className="text-sm text-gray-500">
                                                    En cas de changement de circonstances imprévisibles lors de la conclusion du contrat, conformément aux dispositions de l&apos;article 1195 du Code civil, la Partie qui n&apos;a pas accepté d&apos;assumer un risque d&apos;exécution excessivement onéreuse peut demander une renégociation du contrat à son cocontractant.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 10 - Exécution forcée en nature

                                                </p><p className="text-sm text-gray-500">
                                                    En cas de manquement de l&apos;une ou l&apos;autre des Parties à ses obligations, la Partie victime de la défaillance dispose du droit de requérir l&apos;exécution forcée en nature des obligations découlant des présentes. Conformément aux dispositions de l&apos;article 1221 du Code civil, le créancier de l&apos;obligation pourra poursuivre cette exécution forcée après une simple mise en demeure, adressée au débiteur de l&apos;obligation par lettre recommandée avec accusé de réception demeurée infructueuse, sauf si celle-ci s&apos;avère impossible ou s&apos;il existe une disproportion manifeste entre son coût pour le débiteur, de bonne foi, et son intérêt pour le créancier.
                                                    La Partie victime de la défaillance pourra, en cas d&apos;inexécution de l&apos;une quelconque des obligations incombant à l&apos;autre Partie, demander la résolution du contrat selon les modalités définies à l&apos;article
                                                    «Résolution du contrat».
                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 11 - Exception d&apos;inexécution

                                                </p><p className="text-sm text-gray-500">
                                                    Il est rappelé qu&apos;en application de l&apos;article 1219 du Code civil, chaque Partie pourra refuser d&apos;exécuter son obligation, alors même que celle-ci est exigible, si l&apos;autre Partie n&apos;exécute pas la sienne et si cette inexécution est suffisamment grave, c&apos;est-à-dire, susceptible de remettre en cause la poursuite du contrat ou de bouleverser fondamentalement son équilibre économique. La suspension d&apos;exécution prendra effet immédiatement, à réception par la Partie défaillante de la notification de manquement qui lui aura été adressée à cet effet par la Partie victime de la défaillance indiquant l&apos;intention de faire application de l&apos;exception d&apos;inexécution tant que la Partie défaillante n&apos;aura pas remédié au manquement constaté, signifiée par lettre recommandée avec demande d&apos;avis de réception ou sur tout autre support durable écrit permettant de ménager une preuve de l&apos;envoi.

                                                </p><p className="text-sm text-gray-500">
                                                    Cette exception d&apos;inexécution pourra également être utilisée à titre préventif, conformément aux dispositions de l&apos;article 1220 du Code civil, s&apos;il est manifeste que l&apos;une des Parties n&apos;exécutera pas à l&apos;échéance les obligations qui lui incombent et que les conséquences de cette inexécution sont suffisamment graves pour la Partie victime de la défaillance.
                                                    Cette faculté est utilisée aux risques et périls de la Partie qui en prend l&apos;initiative.
                                                    La suspension d&apos;exécution prendra effet immédiatement, à réception par la Partie présumée défaillante de la notification de l&apos;intention de faire application de l&apos;exception d&apos;inexécution préventive jusqu&apos;à ce que la Partie présumée défaillante exécute l&apos;obligation pour laquelle un manquement à venir est manifeste, signifiée par lettre recommandée avec demande d&apos;avis de réception ou sur tout autre support durable écrit permettant de ménager une preuve de l&apos;envoi.
                                                    Cependant, si l&apos;empêchement était définitif ou perdurait au-delà de 30 jours à compter de la constatation de l&apos;empêchement par lettre recommandé, ou sur tout autre support durable écrit permettant de ménager une preuve de l&apos;envoi, exploit d&apos;huissier, etc. les présentes seraient purement et simplement résolues selon les modalités définies à l&apos;article Résolution pour manquement d&apos;une partie à ses obligations.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 12 - Force majeure

                                                </p><p className="text-sm text-gray-500">
                                                    Les Parties ne pourront être tenues pour responsables si la non-exécution ou le retard dans l&apos;exécution de l&apos;une quelconque de leurs obligations, telles que décrites dans les présentes découle d&apos;un cas de force majeure, au sens de l&apos;article 1218 du Code civil ou d&apos;aléas sanitaires ou climatiques exceptionnels indépendants de la volonté des Parties.
                                                    La Partie constatant l&apos;événement devra sans délai informer l&apos;autre Partie de son impossibilité à exécuter sa prestation et s&apos;en justifier auprès de celle-ci. La suspension des obligations ne pourra en aucun cas être une cause de responsabilité pour non-exécution de l&apos;obligation en cause, ni induire le versement de dommages et intérêts ou pénalités de retard.
                                                    L&apos;exécution de l&apos;obligation est suspendue pendant toute la durée de la force majeure si elle est temporaire. Par conséquent, dès la disparition de la cause de la suspension de leurs obligations réciproques, les Parties feront tous leurs efforts pour reprendre le plus rapidement possible l&apos;exécution normale de leurs obligations contractuelles. A cet effet, la Partie empêchée avertira l&apos;autre de la reprise de son obligation par lettre recommandée avec demande d&apos;avis de réception ou tout acte extrajudiciaire. Si l&apos;empêchement est définitif, les présentes seront purement et simplement résolues selon les modalités définies à l&apos;article « Résolution pour force majeure ».
                                                    Pendant cette suspension, les Parties conviennent que les frais engendrés par la situation seront répartis par moitié.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 13 - Résolution du contrat 13-1 - Résolution pour imprévision

                                                </p><p className="text-sm text-gray-500">
                                                    La résolution pour l&apos;impossibilité de l&apos;exécution d&apos;une obligation devenue excessivement onéreuse ne pourra, nonobstant la clause Résolution pour manquement d&apos;une partie à ses obligations figurant ci-après, intervenir que 8 jours après l&apos;envoi d&apos;une mise en demeure déclarant l&apos;intention d&apos;appliquer la présente clause notifiée par lettre recommandée avec demande d&apos;avis de réception ou tout acte extrajudiciaire pour le client, par les mêmes procédés, mais également sur tout autre support durable écrit permettant de ménager une preuve de l&apos;envoi, y compris l’email pour le prestataire uniquement.

                                                </p><p className="text-sm bold leading-6 text-gray-900">
                                                    13-2 - Dispositions communes aux cas de résolution

                                                </p>

                                                <br /> <p className="text-sm text-gray-500">
                                                    Il est expressément convenu entre les Parties que le débiteur d&apos;une obligation de payer aux termes de la présente convention, sera valablement mis en demeure par la seule exigibilité de l&apos;obligation, conformément aux dispositions de l&apos;article 1344 du Code civil.
                                                    Les prestations échangées entre les Parties depuis la conclusion du contrat et jusqu&apos;à sa résiliation ayant trouvé leur utilité au fur et à mesure de l&apos;exécution réciproque de celui-ci, elles ne donneront pas lieu à restitution pour la période antérieure à la dernière prestation n&apos;ayant pas reçu sa contrepartie.
                                                    En tout état de cause, la Partie lésée pourra demander en justice l&apos;octroi de dommages et intérêts.
                                                </p> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 14 - Litiges- Attribution de juridiction

                                                </p> <p className="text-sm text-gray-500">
                                                    Tous les litiges auxquels le présent contrat et les accords qui en découlent pourraient donner lieu, concernant tant leur validité, leur interprétation, leur exécution, leur résolution, leurs conséquences et leurs suites seront soumis au tribunal de Paris.

                                                </p><br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 15 - Langue du contrat - Droit applicable

                                                </p> <p className="text-sm text-gray-500">

                                                    Les présentes Conditions générales Définir la forme des conditions générales et les opérations qui en découlent sont régies par le droit français.
                                                    Elles sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues, seul le texte français ferait foi en cas de litige.
                                                </p><br /> <p className="text-sm bold leading-6 text-gray-900">
                                                    ARTICLE 16 - Acceptation du Client

                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Les présentes Conditions Générales de Vente sont expressément agréées et acceptées par le Client, qui déclare et reconnaît en avoir une parfaite connaissance, et renonce, de ce fait, à se prévaloir de tout document contradictoire et, notamment, ses propres conditions générales d&apos;achat, qui seront inopposables au Prestataire, même s&apos;il en a eu connaissance.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                                        onClick={handleAgree}
                                    >
                                        Accepter
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={handleClose}
                                        ref={cancelButtonRef}
                                    >
                                        Annuler
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
