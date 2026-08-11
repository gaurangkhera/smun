from zipfile import ZipFile
import xml.etree.ElementTree as ET
import glob
import re
import random
from openpyxl import Workbook

NUM_GROUPS = 54

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
}



def extract_students(docx_file):

    root = ET.fromstring(
        ZipFile(docx_file).read("word/document.xml")
    )

    tables = root.findall(".//w:tbl", NS)

    students = []

    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for table_no, table in enumerate(tables):

        section = letters[table_no]

        rows = table.findall(".//w:tr", NS)

        for row in rows:

            cells = []

            for tc in row.findall("w:tc", NS):

                text = "".join(
                    t.text or ""
                    for t in tc.findall(".//w:t", NS)
                ).strip()

                cells.append(text)

            if len(cells) < 2:
                continue

            first = cells[0].strip()
            second = cells[1].strip()

            if first == "S. No." and second == "Name":
                continue

            if second == "":
                continue

            bad = second.lower()

            # Skip non-student rows
            if (
                "class teacher" in bad or
                "principal" in bad or
                "academic section" in bad or
                "assisted maths" in bad or
                "assisted english" in bad
            ):
                continue

            students.append({
                "section": section,
                "name": second
            })

    return students

# ==========================================================
# GROUP SIZES
# ==========================================================

def group_sizes(n):

    base = n // NUM_GROUPS
    extra = n % NUM_GROUPS

    return [base + 1] * extra + [base] * (NUM_GROUPS - extra)

# ==========================================================
# CREATE EXCEL
# ==========================================================

def create_excel(grade, students):

    wb = Workbook()
    ws = wb.active
    ws.title = "Groups"

    ws.append([
        "Index Number",
        "Class - Section",
        "Student Name",
        "Group"
    ])

    sizes = group_sizes(len(students))

    idx = 0
    serial = 1

    for group_no, size in enumerate(sizes, start=1):

        for _ in range(size):

            student = students[idx]

            ws.append([
                serial,
                f"{grade} {student['section']}",
                student["name"],
                f"Group {group_no}"
            ])

            serial += 1
            idx += 1

    filename = f"Grade_{grade}_Groups.xlsx"
    wb.save(filename)

# ==========================================================
# MAIN
# ==========================================================

files = sorted(glob.glob("Class List*.docx"))

if not files:
    print("No DOCX files found.")
    exit()

print()

for file in files:

    grade = re.search(r"Class List\s+(\d+)", file).group(1)

    students = extract_students(file)

    total = len(students)

    sizes = group_sizes(total)

    print(f"Grade {grade}")
    print(f"Students : {total}")
    print(
        f"Distribution : "
        f"{sizes.count(max(sizes))} groups of {max(sizes)}, "
        f"{sizes.count(min(sizes))} groups of {min(sizes)}"
    )

    random.seed(42)      # Fixed seed → same groups every run
    random.shuffle(students)
    create_excel(grade, students)

    print(f"Created Grade_{grade}_Groups.xlsx")
    print("-" * 60)