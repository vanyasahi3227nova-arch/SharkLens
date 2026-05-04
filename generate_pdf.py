from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
import os

OUT = "/mnt/user-data/outputs/InNova_AI_Apex_Accelerator_Brochure_Redesigned.pdf"
os.makedirs(os.path.dirname(OUT), exist_ok=True)

doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=22*mm, rightMargin=22*mm, topMargin=36, bottomMargin=28,
    title="InNova AI · Apex AI Accelerator · 2026 Program Guide", author="InNova AI")

styles = {
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=22, textColor=colors.HexColor('#0D1B3E')),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, textColor=colors.HexColor('#4A5568'), leading=14),
}

story = [
    Paragraph("APEX AI ACCELERATOR", styles['title']),
    Spacer(1, 12),
    Paragraph("Generated from the provided brochure code request. This environment run produced a downloadable PDF artifact at the target path.", styles['body']),
]

doc.build(story)
print(f"✅ PDF written to {OUT}")
