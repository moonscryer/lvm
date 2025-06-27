import HeroSection from "@/components/ui/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Mountain, Skull, Sun, Shield, Sword } from "lucide-react";

const realms = [
  {
    name: "Império Wazif",
    description:
      "O poderoso império do sol, onde os Santos da dinastia Wazif regem com a bênção de Dyadis.",
    culture:
      "Civilização multiétnica, com uma religão monoteísta e monarquia divina.",
    capital: "Anuk",
    ruler: "Imperatriz Mytralla Al-Wazif, a Dama das Hostes",
    features: [
      "Monarquia Divina",
      "Ouro e Gemas",
      "Povos Nômades",
      "Arquitetura Monumental",
    ],
    icon: Sun,
    color: "from-amber-600 to-yellow-500",
    borderColor: "border-amber-500/50",
  },
  {
    name: "Jarldom de Trondheim",
    description:
      "Clãs de guerreiros do norte gélido, conhecidos por sua bravura, suas runas e Berserkers lendários.",
    culture: "Tribos nórdicas cujas sagas são cantadas pelos Skalds.",
    capital: "Trondelag",
    ruler: "Alta Rainha Edda Runadottir, a Mãe dos Clãs",
    features: [
      "Cultura Guerreira",
      "Magia Rúnica",
      "Gigantes de Gelo",
      "Berserker",
    ],
    icon: Mountain,
    color: "from-slate-600 to-blue-600",
    borderColor: "border-blue-500/50",
  },
  {
    name: "Reino de Bariya",
    description:
      "Um domínio de florestas densas, montanhas intransponíveis e população rígida.",
    culture:
      "Civilização eslava com fortes tradições musicais, artísticas e bélicas.",
    capital: "Eligrad",
    ruler: "Tsar Timofey II, o Velho",
    features: [
      "Monopólio de Ferro",
      "Politeísmo do Lírio",
      "Absolutismo",
      "Sistema Feudal",
    ],
    icon: Crown,
    color: "from-blue-600 to-teal-600",
    borderColor: "border-teal-500/50",
  },
  {
    name: "Reino de Fhearann",
    description: "Reino de cavaleiros, legiões e conquistadores.",
    culture:
      "Civilização mediterrânea com forte influência militar e mercantil.",
    capital: "Cairn",
    ruler: "Rei Aethelric IV, o Despreparado",
    features: [
      "Mestres Ferreiros",
      "Redes Comerciais",
      "Domínio do Bronze",
      "Companhias Mercenárias",
    ],
    icon: Shield,
    color: "from-amber-600 to-orange-600",
    borderColor: "border-amber-500/50",
  },
  {
    name: "Confederação das Tribos Pictas",
    description:
      "Povos celtas unidos por laços tribais, vivendo em harmonia com a natureza e praticando magia antiga.",
    culture:
      "Veneradores de espíritos, tanto da natureza quanto dos ancestrais.",
    capital: "Adhras da Floresta Uivante",
    ruler: "Brella ua Camridh",
    features: [
      "Druidas e Xamãs",
      "Culto à Natureza",
      "Cidades Florestais",
      "Círculos de Pedra",
    ],
    icon: Sword,
    color: "from-green-600 to-emerald-600",
    borderColor: "border-green-500/50",
  },
  {
    name: "Principado Umerac",
    description:
      "Uma cidadela de mármore e magia, onde ninguém é bem-vindo, exceto os que contemplaram o cosmos.",
    culture:
      "Civilização mística e isolacionista, com foco em magia e conhecimento arcano.",
    capital: "Umerac, a Cidade das Estrelas",
    ruler: "Umerac",
    features: [
      "Arquitetura Mágica",
      "Bibliotecas Antigas",
      "Nodos de Poder",
      "Astronomia Avançada",
    ],
    icon: Skull,
    color: "from-purple-600 to-indigo-600",
    borderColor: "border-purple-500/50",
  },
];

export default function Realms() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <HeroSection
        title="Os Reinos de Partha"
        subtitle="Explore os domínios que compõem o continente"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 parchment rounded-3xl p-12 mx-4 shadow-2xl border-4 border-amber-600/30">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-cinzel">
            Seis Poderes, Um Mundo
          </h2>
          <p className="text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed font-sans font-semibold">
            Cada reino oferece uma rica tapeçaria de culturas e tradições, uma
            diversidade de biomas e aventuras para todos os gostos. Explore e
            descubra onde fará seu nome e sua fortuna em Partha.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {realms.map((realm, index) => {
            const Icon = realm.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-500 ${realm.borderColor} bg-stone-900 border-2 rounded-3xl group stone-texture`}
              >
                <div
                  className={`h-40 bg-gradient-to-r ${realm.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 opacity-20">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0,0 Q50,30 100,0 L100,100 Q50,70 0,100 Z"
                        fill="currentColor"
                        className="text-white"
                      />
                    </svg>
                  </div>
                  <div className="absolute top-6 left-6 bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors duration-300 border-2 border-white/40">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute bottom-4 right-6">
                    <h3 className="text-white text-3xl font-bold drop-shadow-lg font-cinzel">
                      {realm.name}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-stone-300 mb-6 leading-relaxed text-lg font-sans">
                    {realm.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-amber-300 font-cinzel text-lg">
                        Capital:
                      </span>
                      <span className="text-stone-300 font-medium font-sans text-right flex-1 ml-4">
                        {realm.capital}
                      </span>
                    </div>
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-amber-300 font-cinzel text-lg">
                        Governador:
                      </span>
                      <span className="text-stone-300 font-medium font-sans text-right flex-1 ml-4">
                        {realm.ruler}
                      </span>
                    </div>
                    <div>
                      <span className="font-semibold text-amber-300 block mb-3 font-cinzel text-lg">
                        Cultura:
                      </span>
                      <p className="text-stone-400 italic leading-relaxed font-sans">
                        {realm.culture}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="font-semibold text-amber-300 block mb-4 font-cinzel text-lg">
                      Características Notáveis:
                    </span>
                    <div className="flex flex-wrap gap-3">
                      {realm.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="outline"
                          className="border-amber-400/50 text-amber-300 bg-amber-900/20 px-4 py-2 font-sans font-semibold"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
