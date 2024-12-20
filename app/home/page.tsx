import { ProfileSection } from '~/components/home/profile-section'
import { SuggestSection } from '~/components/home/suggest-section'
import { SiteHeader } from '~/components/common/site-header'
import { SurveyCard } from '~/components/common/survey-card'
import { NewSurveyButton } from '~/components/home/new-survey-button'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <SiteHeader />
      <div className="mx-auto max-w-screen-2xl items-start gap-6 p-6 lg:flex">
        <ProfileSection />
        <div className="flex-1 space-y-6">
          <NewSurveyButton />
          <SurveyCard
            date="March 15, 2025"
            question="Which landing page design do you prefer for our new product?"
            optionA="Design A"
            optionB="Design B"
            votesA={790}
            votesB={444}
            totalVotes={1234}
          />
          <SurveyCard
            date="March 14, 2025"
            question="Which color scheme resonates better with our brand identity?"
            optionA="Palette A"
            optionB="Palette B"
            votesA={360}
            votesB={496}
            totalVotes={856}
          />
          <SurveyCard
            date="March 15, 2025"
            question="Which landing page design do you prefer for our new product?"
            optionA="Design A"
            optionB="Design B"
            votesA={790}
            votesB={444}
            totalVotes={1234}
          />
          <SurveyCard
            date="March 14, 2025"
            question="Which color scheme resonates better with our brand identity?"
            optionA="Palette A"
            optionB="Palette B"
            votesA={360}
            votesB={496}
            totalVotes={856}
          />
          <SurveyCard
            date="March 15, 2025"
            question="Which landing page design do you prefer for our new product?"
            optionA="Design A"
            optionB="Design B"
            votesA={790}
            votesB={444}
            totalVotes={1234}
          />
          <SurveyCard
            date="March 14, 2025"
            question="Which color scheme resonates better with our brand identity?"
            optionA="Palette A"
            optionB="Palette B"
            votesA={360}
            votesB={496}
            totalVotes={856}
          />
          <SurveyCard
            date="March 15, 2025"
            question="Which landing page design do you prefer for our new product?"
            optionA="Design A"
            optionB="Design B"
            votesA={790}
            votesB={444}
            totalVotes={1234}
          />
          <SurveyCard
            date="March 14, 2025"
            question="Which color scheme resonates better with our brand identity?"
            optionA="Palette A"
            optionB="Palette B"
            votesA={360}
            votesB={496}
            totalVotes={856}
          />
        </div>
        <SuggestSection />
      </div>
    </div>
  )
}
