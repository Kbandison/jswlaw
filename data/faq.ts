export interface FAQ {
  question: string
  answer: string
}

export interface FAQCategory {
  category: string
  questions: FAQ[]
}

export const faqData: FAQCategory[] = [
  {
    category: "Understanding Personal Injury",
    questions: [
      {
        question: "What is a Personal Injury?",
        answer: "A Personal Injury (PI) is any physical or mental injury to a person as a result of someone's negligence or harmful act. Many insurance companies refer to Personal Injury as Bodily Injury (BI)."
      },
      {
        question: "Are auto accidents the only type of Personal Injury?",
        answer: "No. Auto accidents are the most common type of Personal Injury recognized by the general public. Along with auto accidents, Personal Injury law also includes home accidents, boat accidents, airplane crashes, dog bites, defective products, failure to provide adequate security, and malpractice, including the failure to diagnose."
      },
      {
        question: "How do I know if I have a Personal Injury claim?",
        answer: "There are four legal elements to a 'tort' claim: The 'at-fault' person is under a duty to do or not to do something; The 'at-fault' person breaches that duty; You suffer Damages; Your Damages are the result of the 'at-fault' person's actions."
      },
      {
        question: "Do I have a claim if I didn't feel hurt at the scene?",
        answer: "At the scene, you may not feel injured. Many people begin to feel the pain later. See a primary care physician for a complete examination as soon as possible. If you are 'sore', you are probably hurt, and consulting a doctor is important to prevent insurance claim denial."
      },
      {
        question: "Can I recover if I have a 'pre-existing condition'?",
        answer: "Yes. The pre-existing condition is a factor in resolving the claim. The 'at-fault' party takes you in your current condition and may be liable for aggravating the condition."
      }
    ]
  },
  {
    category: "After an Accident",
    questions: [
      {
        question: "What should I do after an accident?",
        answer: "The most important thing is to get well – see your doctor & follow your doctor's orders. Do not discuss the accident or give a statement to the insurance company or attorney for the 'at-fault' driver. Remember: 'What You Say Can and Will Be Used Against You!' Instruct them to call your insurance company or your attorney. Call JSW Law. We do not charge for an initial consultation in accident cases."
      },
      {
        question: "What if the \"at-fault's\" insurance company adjuster calls me?",
        answer: "Do not speak with the adjuster. Refer the adjuster to your insurance company or attorney. Also, do not speak with the attorney for the 'at-fault' driver. The 'at-fault' driver's insurance company is very experienced at handling auto accident claims. The adjuster's goal is to settle your claim as cheaply as possible. Unless you are an experienced claims processor, you should always hire an Attorney to represent your interests."
      },
      {
        question: "What if the \"at-fault's\" attorney calls me?",
        answer: "Get the name and phone number of the attorney. Report the attorney to the Bar Association or licensing authority in your state. It is an ethical violation for an attorney to solicit accident victims."
      },
      {
        question: "What if a chiropractor or healthcare professional solicits me?",
        answer: "Get the name and phone of the health care professional. Report that health care professional to his or her licensing association."
      },
      {
        question: "Do I have to go to an MD?",
        answer: "You do not have to go to your primary care physician for treatment. You can go to a chiropractor, acupuncturist, or other health care professional."
      }
    ]
  },
  {
    category: "Claims and Legal Process",
    questions: [
      {
        question: "Not sure if I have a case or not! What do I do?",
        answer: "Protect your rights. Call JSW Law. Get a professional opinion. You have nothing to lose. We do not charge for an initial consultation in Personal Injury cases."
      },
      {
        question: "I'm not the lawsuit type. What are my options?",
        answer: "Most Personal Injury claims do not become lawsuits. After you are fully recovered from your injuries, your attorney will file a claim with the insurance company. In most cases your attorney (with your approval) and the adjuster negotiate a fair monetary settlement for your injuries."
      },
      {
        question: "Do all Personal Injury claims go to trial?",
        answer: "No. Most Personal Injury claims are settled with the insurance carrier for the 'at-fault' party."
      },
      {
        question: "How long will it take to settle my claim?",
        answer: "There's no set timeline. Complexity, injury severity, and monetary stakes affect duration. Typically, the settlement process starts after medical treatment concludes, and could take around six months."
      },
      {
        question: "What is the value of my claim?",
        answer: "The value is unknown until all injury information and case facts are known. Attorneys are prohibited from promising specific monetary outcomes."
      },
      {
        question: "What is a 'Release'?",
        answer: "A General Release stating the settlement is 'COMPLETE, FINAL AND IRREVOCABLE' for all claims related to the accident, preventing future legal action."
      }
    ]
  },
  {
    category: "Damages and Recovery",
    questions: [
      {
        question: "What are damages?",
        answer: "Damages are any losses or expenses you incurred as a result of the accident."
      },
      {
        question: "What monetary recovery is in an Injury claim?",
        answer: "Personal Injury Victims can recover money for: Medical bills, Lost Wages, Pain & Suffering, Physical Disability, Disfigurement, Permanent Scars, Emotional Trauma, Mental Anguish, Loss of Enjoyment, Loss of Love & Affection, Embarrassment, Mental Disability, Property Damage, and all out of pocket expenses."
      },
      {
        question: "Who handles my medical bills until my case is settled?",
        answer: "Depending on current state law and insurance coverage, medical bills can be paid through: Personal Injury Protection (PIP) coverage, Medical Payments coverage (MPC), Health insurance, Worker's Compensation, or some medical facilities may agree to be paid from settlement funds."
      },
      {
        question: "Will Insurance company pay lost wages while I recover?",
        answer: "Not prior to settling the claim. Lost wages are the client's responsibility before settlement, but can be argued for reimbursement within the claim."
      },
      {
        question: "What can I do about Lost Wages before settlement?",
        answer: "Options include: PIP coverage, Short-term or long-term disability, Using employer-provided 'comp' time, sick time, personal time, or vacation."
      }
    ]
  },
  {
    category: "Working with an Attorney",
    questions: [
      {
        question: "How can I afford an attorney?",
        answer: "We offer contingent fees, meaning 'NO FEES UNLESS YOU RECOVER from the insurance company.' Clients do not need to reach into their own pockets to seek justice."
      },
      {
        question: "What is a Contingent Fee?",
        answer: "A fee that is 'conditioned upon your attorney's successfully resolution of your case' and paid as a percentage of monetary recovery. Clients are typically responsible for out-of-pocket litigation costs."
      },
      {
        question: "How does the lawyer get paid after a settlement?",
        answer: "The settlement check is made payable to the client and attorney. The attorney prepares a Settlement Statement, deducting fees, unpaid medical bills, and litigation expenses."
      },
      {
        question: "Attorney-Client Relationship 101",
        answer: "This relationship is based on trust. The client should be honest and forthcoming about all aspects of their case. We'll explain what to expect, how fees work, communication protocols, and what to bring to meetings. Our goal is to make you comfortable with the legal process."
      },
      {
        question: "I have more questions, who do I talk to?",
        answer: "JSW Law, LLC. is located at 5855 Medlock Bridge Pkwy, Suwanee, GA 30024. Call us at (678) 638-0110, email hlwoo@jswlaw.com, or visit jswlaw.com. Do you have questions we didn't answer? Give us a call or send us an email. We'd love to talk with you and answer your questions in more detail!"
      }
    ]
  }
]

// Key FAQs for homepage preview
export const keyFAQs: FAQ[] = [
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to discuss your legal needs and determine how we can help. This allows us to understand your situation and provide you with clear next steps."
  },
  {
    question: "What should I do after an accident?",
    answer: "The most important thing is to get well – see your doctor & follow your doctor's orders. Do not discuss the accident or give a statement to insurance companies. Call JSW Law for professional guidance."
  },
  {
    question: "Can you help with matters outside of Georgia?",
    answer: "Attorney John S. Woo is licensed in both Georgia and California. For matters in other states, we can often provide guidance or refer you to qualified attorneys in those jurisdictions."
  },
  {
    question: "Not sure if I have a case or not! What do I do?",
    answer: "Protect your rights. Call JSW Law. Get a professional opinion. You have nothing to lose. We do not charge for an initial consultation in Personal Injury cases."
  }
]